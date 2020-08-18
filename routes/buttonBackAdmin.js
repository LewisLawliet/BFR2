const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/buttonBackAdmin");


router.get("/admin/:id", userCtrl.getOneUser);
router.get("/admin", userCtrl.getAllUser);


module.exports = router;