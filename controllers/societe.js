const Article = require("../models/Article");




exports.createArticle = function(req, res, next){
    delete req.body._id;
    const article = new Article ({
        ...req.body
    })

    article.save()

    .then(function(){
        res.status(201).json({message: "Article crée"})
    })

    .catch(function(error){
        console.log(error)
        res.status(400).json({error :error})
    })
};




exports.getAllArticle = function(req, res, next){
    Article.find()
    .then(function(article){
        res.status(200).json({article})
        console.log("tous les articles sont trouvées")

    }) 

    
    .catch(function(error){
        console.log("No found bro")
        res.status(400).json({error})
    })


};


exports.getOneArticle= function(req, res, next){
    Article.findOne({_id: req.params.id})
    .then(function(article){
        res.status(200).json({article})
        console.log("article ciblé: trouvé !")
    })

    

    .catch(function(error){
        console.log(error)
        res.status(404).json({error})
    })

};


exports.modifyArticle= (req, res, next)=>{
    const titleArticle = req.body.titleArticle
    const contenuArticle = req.body.contenuArticle
    
    

   if (titleArticle.length > 0 && contenuArticle == 0){
         Article.updateOne({_id: req.params.id}, {titleArticle})
         .then(()=>{
                res.status(200).json({message: "Article modifié"})
                console.log("TitleArticle Société  modifié !")
                
            })

            .catch((error)=>{
                console.log(error)
                res.status(400).json({error})

            })  

        } 

        else if (contenuArticle.length > 0 && titleArticle == 0) {
          Article.updateOne({_id: req.params.id}, {contenuArticle})
          .then(()=>{
                res.status(200).json({message: "Article modifié"})
                console.log("ContenuArticle Société modifié !")
                
            })

            .catch((error)=>{
                console.log(error)
                res.status(400).json({error})

            })  
        } 

   else if(titleArticle.length > 0 && contenuArticle.length > 0) {
        Article.updateOne({_id: req.params.id}, {...req.body})
        .then(()=>{
                res.status(200).json({message: "Article modifié"})
                console.log("Article Société modifié !")
                
            })

            .catch((error)=>{
                console.log(error)
                res.status(400).json({error})

            }) 


         }   
    

}




exports.deleteArticle= function(req, res, next){
    Article.deleteOne({_id: req.params.id })
    .then(function(){
        res.status(200).json({message: "Article supprimé"})
    })

    .catch(function(error){
        console.log("Suppression ratée")
        res.status(400).json({message: "Suppression ratée"})
    })
};


