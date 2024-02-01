const Helper = require("../helper.js");
const { Product, Category } = require("../models/index.js");
const Utils = require("../utils.js");

module.exports = class UserController {
  static async post(req, res, next) {
    try {
      // get body
      const {
        CategoryId,
        sku,
        name,
        description,
        weight,
        width,
        length,
        height,
        harga,
      } = req.body;
      // POST
      const obj = await Product.create({
        CategoryId,
        sku,
        name,
        description,
        weight,
        width,
        length,
        height,
        // image: "", // lter in PATCH
        harga,
      });
      // FK category
      const createdProduct = await Product.findByPk(obj.id, {
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
        ],
      });
      // res
      res.status(201).json({
        message: "Product successfully created.",
        createdProduct,
      });
    } catch (error) {
      next(error);
    }
  }
  static async get(req, res, next) {
    try {
      // get query
      let { limit, page, sort, sortBy, search, searchBy } = req.query; // .../?limit=10&page=1&
      const options = Helper.pagination(
        limit,
        page,
        sort,
        sortBy,
        search,
        searchBy,
        [
          "id",
          "CategoryId",
          "sku",
          "name",
          "description",
          "weight",
          "width",
          "length",
          "height",
          "image",
          "harga",
        ], // validSortFields (all cols)
        ["sku", "name", "description", "image"] // validSearchFields (strings only)
      );
      options.include = [
        {
          model: Category,
          attributes: ["name"],
        },
      ];
      // GET
      const total = await Product.count();
      // GET
      const obj = await Product.findAll(options);
      // res
      res.status(200).json({
        message: "Chat Rooms successfully retrieved.",
        obj,
        total,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getId(req, res, next) {
    try {
      // get params
      const { id } = req.params; // .../:id
      // GET
      const obj = await Product.findByPk(id, {
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
        ],
      });
      // res
      res.status(200).json({
        message: "Product successfully retrieved.",
        obj,
      });
    } catch (error) {
      next(error);
    }
  }
  static async put(req, res, next) {
    try {
      // get params
      const { id } = req.params; // .../:id]
      // get body
      const {
        CategoryId,
        sku,
        name,
        description,
        weight,
        width,
        length,
        height,
        harga,
      } = req.body;
      // not nulls -> updateFields
      const updateFields = {};
      if (CategoryId) updateFields.CategoryId = CategoryId;
      if (sku) updateFields.sku = sku;
      if (name) updateFields.name = name;
      if (description) updateFields.description = description;
      if (weight) updateFields.weight = weight;
      if (width) updateFields.width = width;
      if (length) updateFields.length = length;
      if (height) updateFields.height = height;
      if (harga) updateFields.harga = harga;
      // PUT
      const [_, [obj]] = await Product.update(updateFields, {
        where: { id },
        returning: true,
      });
      // res
      res.status(200).json({
        message: "Product successfully updated.",
        obj,
      });
    } catch (error) {
      next(error);
    }
  }
  static async patch(req, res, next) {
    try {
      // get params
      const { id } = req.params; // .../:id
      // no file? throw - need middleware
      if (!req.file) {
        Helper.error("File is required.", 400);
      }
      // file -> 64
      const base64 = req.file.buffer.toString("base64");
      // 64 -> image_url & upload
      const result = await Utils.imagekit.upload({
        file: base64,
        fileName: req.file.originalname,
        tags: [`${req.file.originalname}`],
      });
      const image = result.url;
      // PATCH
      const [_, [obj]] = await Product.update(
        { image },
        { where: { id }, returning: true }
      );
      // res
      res.status(200).json({
        message: "Product image url successfully updated.",
        image,
      });
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      // get params
      const { id } = req.params; // .../:id
      // DELETE
      await Product.destroy({ where: { id } });
      // res
      res.status(200).json({
        message: "Product successfully deleted.",
      });
    } catch (error) {
      next(error);
    }
  }
};
