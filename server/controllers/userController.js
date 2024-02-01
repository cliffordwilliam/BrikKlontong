const Helper = require("../helper.js");
const { User } = require("../models/index.js");
const Utils = require("../utils.js");

module.exports = class UserController {
  static async post(req, res, next) {
    try {
      // get body
      const { username, password } = req.body;
      // POST
      const obj = await User.create({
        username,
        password,
      });
      // res
      res.status(201).json({
        message: "User successfully created.",
        obj,
      });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      // get body
      let { username, password } = req.body;
      // null? ""
      username = username ?? "";
      password = password ?? "";
      // no user? throw
      const obj = await User.findOne({ where: { username } });
      if (!obj) {
        Helper.error(
          "User not found. Please check your name or register.",
          401
        );
      }
      // wrong password? throw
      if (!(await Helper.compare(password, obj.password))) {
        Helper.error("Wrong password. Please try again.", 401);
      }
      // payload (user ID) -> token
      const token = Helper.sign(obj.id);
      // res
      res.status(200).json({
        message: "User successfully logged in.",
        token,
        obj,
      });
    } catch (error) {
      next(error);
    }
  }
};
