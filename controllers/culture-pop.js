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



/*exports.modifyArticle= async(req, res, next) => {

    const articleId = req.params.id;
    const aa = req.body.titleArticle;
    //console.log(aa)
   // console.log("après aa")
    
    try {
        const article = await Article.findById(articleId)
        if(!article) throw Error("cet article n'existe pas");
        
        const modifierArticle = await Article.findByIdAndUpdate(articleId, req.body, {
            new: true, runValidators: true
        });
        
        if(!modifierArticle) throw Error("quelque chose s'est mal passé durant la mise à jour de l'article");

        res.status(200).json({message: "Article modifié"})
    }
    catch(error) {
        res.status(400).json({error})
    }
}; */

exports.modifyArticle= (req, res, next)=>{
    const titleArticle = req.body.titleArticle
    const contenuArticle = req.body.contenuArticle
    
    

   if (titleArticle.length > 0 && contenuArticle.length == 0){
         Article.updateOne({_id: req.params.id}, {titleArticle})
         .then(()=>{
                res.status(200).json({message: "Article modifié"})
                console.log("TitleArticle Culture-pop modifié !")
                
            })

            .catch((error)=>{
                console.log(error)
                res.status(400).json({error})

            })  

        } 

        else if (contenuArticle.length > 0 && titleArticle.length == 0) {
          Article.updateOne({_id: req.params.id}, {contenuArticle})
          .then(()=>{
                res.status(200).json({message: "Article modifié"})
                console.log("ContenuArticle Culture-pop modifié !")
                
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
                console.log("Article Culture-pop modifié !")
                
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
        console.log(error)
        res.status(400).json({error})
    })
};

