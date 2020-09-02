const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/buttonBackAdmin");
const authAdmin = require("../middleware/authAdmin");



router.get("/admin/:id", authAdmin, userCtrl.getOneUser);
router.get("/admin", authAdmin, userCtrl.getAllUser);


module.exports = router;