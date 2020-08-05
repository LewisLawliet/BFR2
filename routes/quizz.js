const express = require("express");
const router = express.Router();
const quizzCtrl = require("../controllers/quizz");
const auth = require("../middleware/auth");


router.post("/systeme-sco", quizzCtrl.createAnswer);
router.post("/monde-pro",  quizzCtrl.createAnswer);
router.post("/gastronomie",  quizzCtrl.createAnswer);
router.post("/technologie",  quizzCtrl.createAnswer);




module.exports = router;