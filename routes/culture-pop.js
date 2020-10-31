const express = require("express");
const router = express.Router();
const articleCulturePopCtrl = require ("../controllers/culture-pop");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");



router.post("/gastronomie", articleCulturePopCtrl.createArticle);


router.get("/gastronomie", articleCulturePopCtrl.getAllArticle);

router.get("/gastronomie/:id", articleCulturePopCtrl.getOneArticle);

router.put("/gastronomie/:id", authAdmin, articleCulturePopCtrl.modifyArticle);


router.delete("/gastronomie/:id", authAdmin, articleCulturePopCtrl.deleteArticle);
//////////////////////////////////////////////////////////////////////////////////////

router.post("/technologie", authAdmin, articleCulturePopCtrl.createArticle);


router.get("/technologie", articleCulturePopCtrl.getAllArticle);

router.get("/technologie/:id", articleCulturePopCtrl.getOneArticle);

router.put("/technologie/:id", authAdmin, articleCulturePopCtrl.modifyArticle);

//router.put("/technologie/title/:id", articleCulturePopCtrl.modifyTitleArticle);


router.delete("/technologie/:id", authAdmin, articleCulturePopCtrl.deleteArticle); 

module.exports = router; 

