const db = require("../models");
const Product = db.Product;

// Create product
exports.create = async (req, res) => {
  try {
    const { name, price, category, stock, status } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ error: "Name, price and category are required" });
    }

    const newProduct = await Product.create({ name, price, category, stock, status });
    res.status(201).json(newProduct);
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
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update product by ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      return res.json(updatedProduct);
    }
    res.status(404).json({ error: "Product not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete product
exports.delete = async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (deleted) return res.json({ message: "Product deleted" });
    res.status(404).json({ error: "Product not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Create product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, categoryId, ...otherFields } = req.body;

    if (!categoryId) {
      return res.status(400).json({ message: "Category is required" });
    }

    // Optionally: check if category exists first

    const product = await Product.create({
      name,
      price,
      categoryId,
      ...otherFields,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
