"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Snacks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beverages",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Groceries",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
