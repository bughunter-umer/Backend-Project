const express = require("express");
const router = express.Router();
const products = require("../controllers/product.controller");

// CRUD routes
router.post("/", products.create);       // POST /api/products
router.get("/", products.findAll);       // GET /api/products
router.get("/:id", products.findOne);    // GET /api/products/:id
router.put("/:id", products.update);     // PUT /api/products/:id
router.delete("/:id", products.delete);  // DELETE /api/products/:id

module.exports = router;
