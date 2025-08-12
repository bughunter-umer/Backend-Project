const { Category } = require("../models");

// ✅ Create category
exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });

    const newCategory = await Category.create({ name });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get all categories
exports.findAll = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get one category by ID
exports.findOne = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update category by ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Category.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedCategory = await Category.findByPk(req.params.id);
      return res.json(updatedCategory);
    }
    res.status(404).json({ error: "Category not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete category
exports.delete = async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.json({ message: "Category deleted" });
    }
    res.status(404).json({ error: "Category not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
