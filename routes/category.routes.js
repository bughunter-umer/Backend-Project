const express = require('express');
const router = express.Router();
const categories = require('../controllers/category.controller');

// CRUD routes (RESTful)
router.post('/', categories.create);
router.get('/', categories.findAll);
router.get('/:id', categories.findOne);
router.put('/:id', categories.update);
router.delete('/:id', categories.delete);

module.exports = router;
