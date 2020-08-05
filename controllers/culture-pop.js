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
    }) 

    .catch(function(error){
        console.log(error)
        res.status(400).json({error})
    })


};


exports.getOneArticle= function(req, res, next){
    Article.findOne({_id: req.params.id})
    .then(function(article){
        res.status(200).json({article})
    })

    .catch(function(error){
        console.log(error)
        res.status(404).json({error})
    })

};


exports.modifyArticle= function(req, res, next){
    Article.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(function(){
        res.status(200).json({message: "Article modifié"})
    })

    .catch(function(error){
        console.log(error)
        res.status(400).json({error})
    })
};



exports.deleteArticle= function(req, res, next){
    Article.deleteOne({_id: req.params.id })
    .then(function(){
        res.status(200).json({message: "Article supprimé"})
    })

    .catch(function(error){
        console.log(error)
        res.status(400).json({error})
    })
};


