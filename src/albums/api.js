const { verifyJWT } = require("./../common/auth");
const { getEmailFromRequest } = require("./../common/common");
const { createAlbum, getAlbums } = require("./controllers");

const setApi = (app) => {
  app.post("/album", verifyJWT, async (req, res) => {
    const email = getEmailFromRequest(req);
    const { title, artist } = req.body;
    const album = await createAlbum({
      title,
      artist,
      user: email,
    });
    res.status(200).json({ album });
  });

  app.get("/albums", verifyJWT, async (req, res) => {
    const email = getEmailFromRequest(req);
    const albums = await getAlbums(email);
    res.status(200).json({ albums });
  });
};

module.exports = {
  setApi,
};
