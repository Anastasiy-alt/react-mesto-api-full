const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const ConflictError = require('../errors/ConflictError');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getUser = (req, res, next) => {
  User.find({})
    .then((user) => res.status(200).send(user))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  // const {
  //   name, about, avatar, email, password,
  // } = req.body;
  const {
    password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
      about: req.body.about,
      avatar: req.body.avatar, // записываем хеш в базу
    }))
    .then((user) => {
      const resData = {
        email: user.email,
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        _id: user._id,
      };
      res.status(201).send(resData);
    })
    // .then(() => res.send({
    //   name, about, avatar, email,
    // }))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('Пользователь с данным email уже существует.'));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError('Некорректные данные при создании карточки.'));
      } else {
        next(err);
      }
    });
};

module.exports.getUserId = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }
      res.send(user);
    })
    .catch(next);
};

module.exports.updateProfile = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    // .then((user) => res.send({ user }))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError('Некорректные данные при создании карточки.'));
      }
      return next(err);
    });
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    // .then((user) => res.send({ user }))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError('Некорректные данные при создании карточки.'));
      }
      return next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key',
        { expiresIn: '7d' },
      );
      res.cookie('token', token, {
        httpOnly: true,
      });
      // res.send({
      //   data: {
      //     name: user.name,
      //     avatar: user.avatar,
      //     about: user.about,
      //     email: user.email,
      //     _id: user._id,
      //   },
      // });
    })
    .catch(next);
};

module.exports.logout = (req, res) => {
  res.clearCookie('token', {
    sameSite: 'none',
    secure: true,
  });
  res.send({ message: 'токен успешно удален из cookies' });
};

module.exports.getUserMe = (req, res, next) => {
  // const { _id } = req.user;
  const { _id } = req.params;
  User
    .findById(_id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id.');
      }
      res.send({ data: user });
      // res.send(user);
    })
    .catch(next);
};

module.exports.checkCookie = (req, res) => {
  if (!req.cookies.token) {
    return res.send('false');
  }
  return res.send('true');
};
