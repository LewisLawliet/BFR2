const express = require("express");
const router = express.Router();
//const userCtrl = require("../controllers/buttonBackAdmin");
const authAdmin = require("../middleware/authAdmin");



router.get("/space/:id", authAdmin)
router.get("/space", authAdmin);


module.exports = router;