const express = require("express");
const router = express.Router();
const goodAnswerCtrl = require("../controllers/goodAnswer");
const auth = require("../middleware/auth");


router.post("/systeme-sco", goodAnswerCtrl.createGoodAnswer);
router.post("/monde-pro",  goodAnswerCtrl.createGoodAnswer);
router.post("/gastronomie",  goodAnswerCtrl.createGoodAnswer);
router.post("/technologie",  goodAnswerCtrl.createGoodAnswer);


/*router.delete("/systeme-sco", quizzCtrl.deleteAnswer);
router.delete("/monde-pro",  quizzCtrl.deleteAnswer);
router.delete("/gastronomie",  quizzCtrl.deleteAnswer);
router.delete("/technologie",  quizzCtrl.deleteAnswer); */



module.exports = router;