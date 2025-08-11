const express = require('express');
const router = express.Router();
const subjects = require('../controllers/subject.controller');

// CRUD routes
router.post('/', subjects.create);
router.get('/', subjects.findAll);
router.get('/:id', subjects.findOne);
router.put('/:id', subjects.update);
router.delete('/:id', subjects.delete);

module.exports = router;
