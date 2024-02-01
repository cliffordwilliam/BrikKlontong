"use strict";
const { Model } = require("sequelize");
const Helper = require("../helper");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false, // required
        unique: { msg: "Username is already in use." }, // unique
        validate: {
          len: {
            args: [5, Infinity],
            msg: "Username must have a minimum length of 5 characters.",
          }, // char len min 5
          notNull: { msg: "Username is required." }, // required
          notEmpty: { msg: "Username cannot be empty." }, // required
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false, // required
        validate: {
          len: {
            args: [5, Infinity],
            msg: "Col must have a minimum length of 5 characters.",
          }, // char len min 5
          notNull: { msg: "Col is required." }, // required
          notEmpty: { msg: "Col cannot be empty." }, // required
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate(async (user) => {
    user.password = await Helper.hash(user.password);
  });
  return User;
};
