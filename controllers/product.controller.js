const db = require("../models");
const Product = db.Product;

// Create product
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all products
exports.findAll = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one product by ID
exports.findOne = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    product
      ? res.json(product)
      : res.status(404).json({ error: "product not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update product by ID
exports.update = async (req, res) => {
  try {
    const updated = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    console.log(updated);
    updated == 1
      ? res.json({ message: "product updated" })
      : res.status(404).json({ error: "product not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete product
exports.delete = async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    deleted
      ? res.json({ message: "product deleted" })
      : res.status(404).json({ error: "product not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
