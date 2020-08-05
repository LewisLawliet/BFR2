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