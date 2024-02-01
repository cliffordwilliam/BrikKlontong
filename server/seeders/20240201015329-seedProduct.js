"use strict";
const faker = require("faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [];
    for (let i = 1; i <= 100; i++) {
      products.push({
        CategoryId: Math.floor(Math.random() * 5) + 1,
        sku: faker.random.alphaNumeric(6).toUpperCase(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        weight: faker.datatype.number({ min: 100, max: 1000 }),
        width: faker.datatype.number({ min: 1, max: 10 }),
        length: faker.datatype.number({ min: 1, max: 10 }),
        height: faker.datatype.number({ min: 1, max: 10 }),
        image: faker.image.imageUrl(),
        harga: faker.datatype.number({ min: 1000, max: 10000 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
