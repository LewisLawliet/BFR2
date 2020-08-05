const express = require("express");
const router = express.Router();
const articleCulturePopCtrl = require ("../controllers/culture-pop");
const auth = require("../middleware/auth");

router.post("/gastronomie", articleCulturePopCtrl.createArticle);


router.get("/gastronomie", auth, articleCulturePopCtrl.getAllArticle);

router.get("/gastronomie:id", auth, articleCulturePopCtrl.getOneArticle);

router.put("/gastronomie:id", auth, articleCulturePopCtrl.modifyArticle);


router.delete("/gastronomie:id", auth, articleCulturePopCtrl.deleteArticle);
//////////////////////////////////////////////////////////////////////////////////////

router.post("/technologie", articleCulturePopCtrl.createArticle);


router.get("/technologie", auth, articleCulturePopCtrl.getAllArticle);

router.get("/technologie:id", auth, articleCulturePopCtrl.getOneArticle);

router.put("/technologie:id", auth, articleCulturePopCtrl.modifyArticle);


router.delete("/technologie:id", auth, articleCulturePopCtrl.deleteArticle); 

module.exports = router; 

