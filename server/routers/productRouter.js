// router maker
const express = require("express");
// my controller
const productController = require("../controllers/productController.js");
// guard
const Middleware = require("../middleware.js");
// 3rd party api
const Utils = require("../utils.js");
// my router
const productRouter = express.Router();

// endpoints
productRouter.post("/", productController.post);
productRouter.get("/", productController.get);
productRouter.get("/:id", productController.getId);
productRouter.put("/:id", productController.put);
productRouter.patch(
  "/:id",
  Utils.upload.single("image"),
  productController.patch
); // req.file need middleware
productRouter.delete("/:id", productController.delete);

// export
module.exports = productRouter;
