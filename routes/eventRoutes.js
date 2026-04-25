const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const role = require('../middleware/role');
const controller = require('../controllers/eventController');

// Public
router.get('/', controller.getAll);

// Protected
router.post('/', auth, role('organizer'), controller.create);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);

module.exports = router;