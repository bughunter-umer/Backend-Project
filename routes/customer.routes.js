const express = require('express');
const router = express.Router();
const customers = require('../controllers/customer.controller');

// CRUD routes
router.post('/', customers.create);
router.get('/', customers.findAll);
router.get('/:id', customers.findOne);
router.put('/:id', customers.update);
router.delete('/:id', customers.delete);

module.exports = router;
