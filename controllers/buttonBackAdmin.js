const User = require("../models/User");



exports.getAllUser = function(req, res, next){
    User.find()
    .then(function(user){
        res.status(200).json({user})
    }) 

    .catch(function(error){
        console.log(error)
        res.status(400).json({error})
    })


};


exports.getOneUser= function(req, res, next){
    User.findOne({_id: req.params.id})
    .then(function(user){
        res.status(200).json({user})
    })

    .catch(function(error){
        console.log(error)
        res.status(404).json({error})
    })

};