const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.user.jwt;
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err)
      return res.status(400).json({ auth: false, message: "Invalid token." });

    req.user = jwt.decode(token, process.env.JWT_SECRET).data;
    next();
  });
};

const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

module.exports = {
  verifyJWT,
  checkUserLoggedIn,
};
