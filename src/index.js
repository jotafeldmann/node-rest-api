const express = require("express");
const cookieSession = require("cookie-session");
const { passport } = require("./auth/passport");

const albums = require("./albums/api");
const login = require("./login/api");
const home = require("./home/api");
const profile = require("./profile/api");

const setupApp = (app) => {
  app.use(express.json());

  app.use(
    cookieSession({
      name: "session-name",
      keys: ["key1", "key2"],
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};

const setRoutes = (app) => {
  home.setApi(app);
  profile.setApi(app);
  login.setApi(app);
  albums.setApi(app);
};

const initApp = () => {
  const app = express();
  setupApp(app);
  setRoutes(app);
  return app;
};

if (require.main === module) {
  const app = initApp();
  app.listen(process.env.PORT, () =>
    console.log(`App listening on http://localhost:${process.env.PORT}`)
  );
}

module.exports = {
  initApp,
};
