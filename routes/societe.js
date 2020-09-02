const express = require("express");
const router = express.Router();
const articleSocieteControllers = require ("../controllers/societe");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");


router.post("/systeme-sco", authAdmin, articleSocieteControllers.createArticle);


router.get("/systeme-sco",  articleSocieteControllers.getAllArticle);

router.get("/systeme-sco/:id", articleSocieteControllers.getOneArticle);

router.put("/systeme-sco/:id", authAdmin, articleSocieteControllers.modifyArticle);


router.delete("/systeme-sco/:id", authAdmin, articleSocieteControllers.deleteArticle);
//////////////////////////////////////////////////////////////////////////////////////

router.post("/monde-pro", authAdmin, articleSocieteControllers.createArticle);


router.get("/monde-pro", articleSocieteControllers.getAllArticle);

router.get("/monde-pro/:id", articleSocieteControllers.getOneArticle);

router.put("/monde-pro/:id", authAdmin, articleSocieteControllers.modifyArticle);


router.delete("/monde-pro/:id", authAdmin, articleSocieteControllers.deleteArticle); 

module.exports = router; 

