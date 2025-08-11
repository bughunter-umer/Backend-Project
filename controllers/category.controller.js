const db = require('../models');
const Category = db.Category;

// Create category
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all categories
exports.findAll = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one category by ID
exports.findOne = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    category ? res.json(category) : res.status(404).json({ error: 'category not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update category by ID
exports.update = async (req, res) => {
  try {
    const updated = await Category.update(req.body, { where: { id: req.params.id } });
    console.log(updated);
    updated == 0 ? res.json({ message: 'category updated' }) : res.status(404).json({ error: 'category not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete category
exports.delete = async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    deleted ? res.json({ message: 'category deleted' }) : res.status(404).json({ error: 'category not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
