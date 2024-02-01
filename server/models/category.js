"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: "CategoryId" });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, // required
        validate: {
          notNull: { msg: "Name is required." }, // required
          notEmpty: { msg: "Name cannot be empty." }, // required
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
