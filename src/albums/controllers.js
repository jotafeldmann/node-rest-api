const { Albums } = require("./domain");

const getAlbums = async (email) => {
  return Albums.findAll({
    where: {
      user: email,
    },
  });
};

const createAlbum = async ({ title, artist, user }) => {
  return Albums.create({
    title,
    artist,
    user,
  });
};

module.exports = {
  createAlbum,
  getAlbums,
};
