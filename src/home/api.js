const setApi = (app) => {
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
};

module.exports = {
  setApi,
};
