
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Question = require("../models/Question");
require('dotenv').config()



exports.signup = function(req, res, next){	
	console.log(req.body);
	bcrypt.hash(req.body.password, 10)	
	.then(function(hash){
		const user = new User ({
			name: req.body.name,
			email: req.body.email,				
			password: hash
			
		})
		

		user.save()
			.then(function(){
				res.status(201).json({message: "Bingo ! Utilisateur créé"})
		})		
			.catch(function(error){
				res.status(400).json({message: "hash  réussi mais sauvegarde raté"})
		})

	})

	.catch(function(error){
		res.status(500).json({message: "échec hash "})
	}) 

};







exports.login = function(req, res, next){	


	User.findOne({email: req.body.email, name: req.body.name})
	.then(function(user){
		if(!user){
			return res.status(401).json({message: "Utilisateur non trouvé"})
		}

		bcrypt.compare(req.body.password, user.password)
		.then(function(valid){
			if(!valid){
				return res.status(401).json({message: "Mot de passe incorrect"})
			}

			res.status(200).json({
				userId: user._id,								
				token: jwt.sign(
					{userId: user._id, admin: user.admin, grade: user.grade},					
					process.env.KEY,									
					{expiresIn: "3h"}
					
				)
			})
			console.log(user.grade)
			console.log("Yes,connexion réussie bro !")
			
		})
		.catch(function(error){
			res.status(500).json({error})
		})

	})
	.catch(function(error){
		res.status(500).json({error})
	})
};





