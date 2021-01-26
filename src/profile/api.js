const { getEmailFromRequest, getJwt } = require("./../common/common");
const { checkUserLoggedIn } = require("./../common/auth");

const setApi = (app) => {
  app.get("/profile", checkUserLoggedIn, (req, res) => {
    res.send(`<h1>${req.user.displayName}'s Profile Page</h1>
<br>
<b>Email:</b> ${getEmailFromRequest(req)}
<br>
<b>JWT:</b> <br> ${req.user.jwt}
`);
  });
};

module.exports = {
  setApi,
};
