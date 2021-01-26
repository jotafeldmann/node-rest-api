const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./passport");
const jwt = require("jsonwebtoken");

const { getEmailFromRequest } = require("./common/common");
const { checkUserLoggedIn } = require("./common/auth");
const { setApi } = require("./albums/api");

const app = express();

app.use(express.json());

//Configure Session Storage
app.use(
  cookieSession({
    name: "session-name",
    keys: ["key1", "key2"],
  })
);

//Configure Passport
app.use(passport.initialize());
app.use(passport.session());

//Unprotected Routes
app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>
<br>
<a href="/login">Login</a>
<br>
<br>
<a href="/profile">Profile</a>
<br><br>
<a href="/albums">Albums</a>
<br>
<br>
<br>
<br>
<br>
<a href="/logout">Logout</a>
`);
});

app.get("/failed", (req, res) => {
  res.send("<h1>Log in Failed :(</h1>");
});

// Middleware - Check user is Logged in

//Protected Route.
app.get("/profile", checkUserLoggedIn, (req, res) => {
  res.send(`<h1>${req.user.displayName}'s Profile Page</h1>
<br>
<b>Email:</b> ${getEmailFromRequest(req)}
<br>
<b>JWT:</b> <br> ${req.user.jwt}
`);
});

// Auth Routes
app.get(
  "/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    req.user.jwt = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: req.user,
      },
      process.env.JWT_SECRET
    );
    res.redirect("/profile");
  }
);

//Logout
app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

setApi(app);

const init = async () => {
  app.listen(3000, () =>
    console.log(`App listening on http://localhost:${process.env.PORT} 🚀🔥`)
  );
};

init();
