const passport = require("passport");
const jwt = require("jsonwebtoken");

const ONE_HOUR = Math.floor(Date.now() / 1000) + 60 * 60;

const setApi = (app) => {
  app.get(
    "/login",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    res.redirect("/");
  });

  app.get("/failed", (req, res) => {
    res.send("<h1>Log in Failed :(</h1>");
  });

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/failed" }),
    function (req, res) {
      req.user.jwt = jwt.sign(
        {
          exp: ONE_HOUR,
          data: req.user,
        },
        process.env.JWT_SECRET
      );
      res.redirect("/profile");
    }
  );
};

module.exports = {
  setApi,
};
