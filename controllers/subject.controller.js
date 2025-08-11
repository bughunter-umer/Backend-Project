const db = require('../models');
const Subject = db.Subject;

// Create subject
exports.create = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.json(subject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all subjects
exports.findAll = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one subject by ID
exports.findOne = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    subject ? res.json(subject) : res.status(404).json({ error: 'Subject not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update subject
exports.update = async (req, res) => {
  try {
    const updated = await Subject.update(req.body, { where: { id: req.params.id } });
    updated[0] ? res.json({ message: 'Subject updated' }) : res.status(404).json({ error: 'Subject not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete subject
exports.delete = async (req, res) => {
  try {
    const deleted = await Subject.destroy({ where: { id: req.params.id } });
    deleted ? res.json({ message: 'Subject deleted' }) : res.status(404).json({ error: 'Subject not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
