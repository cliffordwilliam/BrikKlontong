"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        references: { model: "Categories", key: "id" }, // fk
        onUpdate: "cascade", // fk
        onDelete: "cascade", // fk
        allowNull: false, // required
        validate: {},
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false, // required
        validate: {},
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, // required
        validate: {},
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false, // required
        validate: {},
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false, // required
        validate: {},
      },
      width: {
        type: Sequelize.INTEGER,
        allowNull: false, // required
        validate: {},
      },
      length: {
        type: Sequelize.INTEGER,
        allowNull: false, // required
        validate: {},
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false, // required
        validate: {},
      },
      image: {
        type: Sequelize.STRING,
        // allowNull: false, // required
        validate: {},
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: false, // required
        validate: {},
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
