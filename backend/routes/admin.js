const express = require("express");
const router = express.Router();

const {loginAdmin} = require('../controllers/admin');

// router.get('/', (req, res) => {
//     res.render('admin');
// });
router.post('/', loginAdmin);

module.exports = router;