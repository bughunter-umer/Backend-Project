const db = require("../models");
const customer = db.customer;

// Create customer
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const customer = await customer.create(req.body);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all customers
exports.findAll = async (req, res) => {
  try {
    const customers = await customer.findAll();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one customer by ID
exports.findOne = async (req, res) => {
  try {
    const customer = await customer.findByPk(req.params.id);
    customer
      ? res.json(customer)
      : res.status(404).json({ error: "customer not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update customer by ID
exports.update = async (req, res) => {
  try {
    const updated = await customer.update(req.body, {
      where: { id: req.params.id },
    });
    console.log(updated);
    updated == 1
      ? res.json({ message: "customer updated" })
      : res.status(404).json({ error: "customer not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete customer
exports.delete = async (req, res) => {
  try {
    const deleted = await customer.destroy({ where: { id: req.params.id } });
    deleted
      ? res.json({ message: "customer deleted" })
      : res.status(404).json({ error: "customer not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
