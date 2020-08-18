const express = require("express");
const router = express.Router();
const articleSocieteControllers = require ("../controllers/societe");
const auth = require("../middleware/auth");

console.log("wazaaaaaaa")

router.post("/systeme-sco", articleSocieteControllers.createArticle);


router.get("/systeme-sco", articleSocieteControllers.getAllArticle);

router.get("/systeme-sco/:id", articleSocieteControllers.getOneArticle);

router.put("/systeme-sco/:id", articleSocieteControllers.modifyArticle);


router.delete("/systeme-sco/:id", articleSocieteControllers.deleteArticle);
//////////////////////////////////////////////////////////////////////////////////////

router.post("/monde-pro", articleSocieteControllers.createArticle);


router.get("/monde-pro", articleSocieteControllers.getAllArticle);

router.get("/monde-pro/:id", auth, articleSocieteControllers.getOneArticle);

router.put("/monde-pro/:id", auth, articleSocieteControllers.modifyArticle);


router.delete("/monde-pro/:id", articleSocieteControllers.deleteArticle); 

module.exports = router; 

