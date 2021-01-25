const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class Albums extends Model {}

Albums.init(
  {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Albums",
    defaultScope: {
      attributes: { exclude: ["user"] },
    },
  }
);

Albums.sync({ force: true });

module.exports = { Albums };
