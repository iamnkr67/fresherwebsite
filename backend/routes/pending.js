const express = require('express');
const router = express.Router();

const { addPendingStatus, getPenidngData } = require('../controllers/pendingCntrl');
router.post('/', addPendingStatus);

router.get('/', getPenidngData);

module.exports = router;