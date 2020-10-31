const express = require("express");
const router = express.Router();
const quizzCtrl = require("../controllers/quizz");
const auth = require("../middleware/auth");


router.post("/systeme-sco/:id", quizzCtrl.createAnswer);
router.post("/monde-pro/:id",  quizzCtrl.createAnswer);
router.post("/gastronomie/:id",  quizzCtrl.createAnswer);
router.post("/technologie/:id",  quizzCtrl.createAnswer);


router.delete("/systeme-sco", quizzCtrl.deleteAnswer);
router.delete("/monde-pro",  quizzCtrl.deleteAnswer);
router.delete("/gastronomie",  quizzCtrl.deleteAnswer);
router.delete("/technologie",  quizzCtrl.deleteAnswer);



module.exports = router;