"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: "CategoryId" });
    }
  }
  Product.init(
    {
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false, // required
        validate: {
          notNull: { msg: "CategoryId is required." }, // required
          notEmpty: { msg: "CategoryId cannot be empty." }, // required
        },
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: false, // required
        validate: {
          notNull: { msg: "Sku is required." }, // required
          notEmpty: { msg: "Sku cannot be empty." }, // required
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, // required
        validate: {
          notNull: { msg: "Name is required." }, // required
          notEmpty: { msg: "Name cannot be empty." }, // required
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false, // required
        validate: {
          notNull: { msg: "Description is required." }, // required
          notEmpty: { msg: "Description cannot be empty." }, // required
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false, // required
        validate: {
          notNull: { msg: "Weight is required." }, // required
          notEmpty: { msg: "Weight cannot be empty." }, // required
        },
      },
      width: {
        type: DataTypes.INTEGER,
        allowNull: false, // required
        validate: {
          notNull: { msg: "Width is required." }, // required
          notEmpty: { msg: "Width cannot be empty." }, // required
        },
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false, // required
        validate: {
          notNull: { msg: "Length is required." }, // required
          notEmpty: { msg: "Length cannot be empty." }, // required
        },
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false, // required
        validate: {
          notNull: { msg: "Height is required." }, // required
          notEmpty: { msg: "Height cannot be empty." }, // required
        },
      },
      image: {
        type: DataTypes.STRING,
        // allowNull: false, // required
        validate: {
          // notNull: { msg: "Image is required." }, // required
          // notEmpty: { msg: "Image cannot be empty." }, // required
        },
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false, // required
        validate: {
          notNull: { msg: "Harga is required." }, // required
          notEmpty: { msg: "Harga cannot be empty." }, // required
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
