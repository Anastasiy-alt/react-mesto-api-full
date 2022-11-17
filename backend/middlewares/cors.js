const allowedCors = [
  'https://mesto.pilot.nomoredomains.icu',
  'http://mesto.pilot.nomoredomains.icu',
  'https://api.mesto.pilot.nomoredomains.icu',
  'http://api.mesto.pilot.nomoredomains.icu',
  'https://localhost:3000',
  'http://localhost:3000',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  res.header('Access-Control-Allow-Credentials', true);
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  if (method === 'OPTIONS') {
    const allowHeaders = `${requestHeaders}, 'Set-Cookie'`;
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', allowHeaders);
    res.end();
  }
  next();
};
