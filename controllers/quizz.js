const Reponse = require("../models/Reponse");
const User = require("../models/User");



exports.createAnswer = function(req, res, next){
    delete req.body._id;
    
    const reponse = new Reponse ({
        ...req.body
    })

    reponse.save()

        

    .then(function(){
        res.status(201).json({message: " réponse créée"})
        console.log("Yeah ! Réponse envoyée")
    })



    .catch(function(error){
        
        res.status(400).json({message: "réponse non créée"})
        console.log("réponse ne passe pas")
    })
}; 



exports.deleteAnswer = function(req, res, next){
    Reponse.deleteOne({_id: req.params.id })
    .then(function(){
        res.status(200).json({message: "Réponse supprimée"})
    })

    .catch(function(error){
        console.log("Suppression ratée")
        res.status(400).json({message: "Suppression ratée"})
    })
};