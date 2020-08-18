const express = require("express");
const router = express.Router();
const articleCulturePopCtrl = require ("../controllers/culture-pop");
const auth = require("../middleware/auth");

console.log("culture-pop")

router.post("/gastronomie", articleCulturePopCtrl.createArticle);


router.get("/gastronomie", articleCulturePopCtrl.getAllArticle);

router.get("/gastronomie/:id", auth, articleCulturePopCtrl.getOneArticle);

router.put("/gastronomie/:id", auth, articleCulturePopCtrl.modifyArticle);


router.delete("/gastronomie/:id", articleCulturePopCtrl.deleteArticle);
//////////////////////////////////////////////////////////////////////////////////////

router.post("/technologie", articleCulturePopCtrl.createArticle);


router.get("/technologie", articleCulturePopCtrl.getAllArticle);

router.get("/technologie/:id", articleCulturePopCtrl.getOneArticle);

router.put("/technologie/:id", articleCulturePopCtrl.modifyArticle);


router.delete("/technologie/:id", articleCulturePopCtrl.deleteArticle); 

module.exports = router; 

