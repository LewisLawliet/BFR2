const express = require("express");
const router = express.Router();
const questionCtrl = require("../controllers/themeQuizz");
const auth = require("../middleware/auth");



router.post("/systeme-sco", questionCtrl.createQuestion);
router.get("/systeme-sco/:id", auth, questionCtrl.getOneQuestion);
router.get("/systeme-sco", auth, questionCtrl.getAllQuestion);
router.put("/systeme-sco/:id", auth, questionCtrl.modifyQuestion);
router.delete("/systeme-sco/:id", auth, questionCtrl.deleteQuestion);

router.post("/monde-pro",  questionCtrl.createQuestion);
router.get("/monde-pro/:id", auth, questionCtrl.getOneQuestion);
router.get("/monde-pro", auth, questionCtrl.getAllQuestion);
router.put("/monde-pro/:id", auth, questionCtrl.modifyQuestion);
router.delete("/monde-pro/:id", auth, questionCtrl.deleteQuestion);

router.post("/gastronomie",  questionCtrl.createQuestion);
router.get("/gastronomie/:id", auth, questionCtrl.getOneQuestion);
router.get("/gastronomie", auth, questionCtrl.getAllQuestion);
router.put("/gastronomie/:id", auth, questionCtrl.modifyQuestion);
router.delete("/gastronomie/:id", auth, questionCtrl.deleteQuestion);

router.post("/technologie",  questionCtrl.createQuestion);
router.get("/technologie/:id", auth, questionCtrl.getOneQuestion);
router.get("/technologie", auth, questionCtrl.getAllQuestion);
router.put("/technologie/:id", auth, questionCtrl.modifyQuestion);
router.delete("/technologie/:id", auth, questionCtrl.deleteQuestion);



module.exports = router;

