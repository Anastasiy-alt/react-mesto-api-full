import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../context/CurrentUserContext';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import api from '../utils/Api';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import DeleteCardPopup from './DeleteCardPopup';
import AddPlacePopup from './AddPlacePopup'
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import Login from './Login';
import InfoTooltip from './InfoTooltip';
import * as auth from '../utils/auth';
import '../index.css';

function App() {
    const history = useHistory();

    const [loggedIn, setLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [selectDelete, setSelectDelete] = useState(false);
    const [deleteCard, setDeleteCard] = useState('');

    const tokenCheck = () => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            return;
        }
        auth
            .checkToken(jwt)
            .then((data) => {
                setUserEmail(data.email);
                setCurrentUser(data);
                setLoggedIn(true);
                history.push("/")
            })
            .catch((err) => console.log(err));
        api
            .getInitialCards(jwt)
            .then((initialCards) => {
                setCards(initialCards)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        tokenCheck()
    }, []);

    useEffect(() => {
        if (loggedIn) {
            Promise.all([api.getInitialCards(), api.getUserInfo()])
                .then(([cardData, userData]) => {
                    setCards(cardData);
                    setCurrentUser(userData);
                })
                .catch((err) => {
                    console.log(`????????????: ${err}`);
                })
        }
    }, [loggedIn])

    const handleSignOut = () => {
        setLoggedIn(false);
        localStorage.removeItem('jwt');
        history.push("/sign-in");
    }

    const handleUpdateUser = (userData) => {
        api.setUserInfo(userData)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((error) => {
                console.log(`????????????: ${error}`);
            })
    };
    const handleAddCard = (card) => {
        api.addCard(card)
            .then(({ data }) => {
                setCards([data, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`????????????: ${err}`);
            })
    };
    const handleUpdateAvatar = ({avatar}) => {
        api.setUserAvatar(avatar)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`????????????: ${err}`);
            })
    };

    function handleLogin(email, password) {
        return auth
            .authorize(email, password)
            .then((data) => {
                if (data) {
                    setLoggedIn(true)
                    localStorage.setItem('jwt', data.token);
                    setUserEmail(email);
                    history.push("/");
                    tokenCheck();
                }
            })
            .catch((err) => {
                setIsSuccess(false);
                setIsInfoTooltipPopupOpen(true);
                console.log(`????????????: ${err}`);
            })
    }
    function handleRegister(email, password) {
        return auth
            .register(email, password)
            .then(() => {
                setIsSuccess(true);
                setIsInfoTooltipPopupOpen(true);
                history.push("/sign-in");
            })
            .catch((err) => {
                setIsSuccess(false);
                setIsInfoTooltipPopupOpen(true);
                console.log(`????????????: ${err}`);
            })
    }
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(`????????????: ${err}`);
            });
    }
    function handleCardDelete(cardId) {
        api.deleteCard(cardId)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== cardId));
            })
            .catch((err) => {
                console.log(`????????????: ${err}`);
            });
    }

    const handleRemoveClick = (cardId) => {
        setSelectDelete(!selectDelete);
        setDeleteCard(cardId);
    };
    const handleUserInfo = (userInfo) => {
        setCurrentUser(userInfo);
    }
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    const handleCardClick = (card) => {
        setSelectedCard(card);
    }
    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectDelete(false);
        setSelectedCard({});
        setIsInfoTooltipPopupOpen(false);
    }

    return (

        <CurrentUserContext.Provider value={currentUser}>

            <div className="page">

                <Header
                    loggedIn={loggedIn}
                    userEmail={userEmail}
                    onSignOut={handleSignOut} />
                <Switch>
                    <ProtectedRoute exact path="/"
                        loggedIn={loggedIn}
                        component={Main}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        onDeleteClick={handleRemoveClick}
                        onUserInfo={handleUserInfo}
                        cards={cards}
                        onCardLike={handleCardLike}
                        cardId={deleteCard} />

                    <Route path="/sign-in">
                        <Login onLogin={handleLogin} />
                    </Route>
                    <Route path="/sign-up">
                        <Register onRegister={handleRegister} />
                    </Route>
                    <Route>
                        {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
                    </Route>
                </Switch>

                <Footer />

                <InfoTooltip
                    loggedIn={isSuccess}
                    isOpen={isInfoTooltipPopupOpen}
                    onClose={closeAllPopups} />

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser} />

                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddCard={handleAddCard} />

                <DeleteCardPopup
                    name="delete"
                    title="???? ???????????????"
                    button="????"
                    onClose={closeAllPopups}
                    isOpen={selectDelete}
                    cardId={deleteCard}
                    onCardDelete={handleCardDelete}
                    popupDelete={true} />

                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar} />

                <ImagePopup
                    onClose={closeAllPopups}
                    card={selectedCard} />

            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;