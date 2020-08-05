const Question = require("../models/Question");
const User = require("../models/User");

/*exports.createQuestion = function(req, res, next){
	delete req.body._id;
	const question = new Question ({
		...req.body
	})
	question.save()
	.then(function(){
		res.status(201).json({message: "Question enregistrée"})
	})
	.catch(function(error){
		console.log(error)
		res.status(400).json({error :error})
	})

}; */

exports.createQuestion = function(req, res, next){
	const user = User.findOne({userId: req.params._id})
	.then(function(user) {
		console.log(user.admin);
		if (user.admin){

			delete req.body._id;
			const question = new Question ({
				...req.body
			})
			question.save()
			.then(function(){
				res.status(201).json({message: "Question enregistrée"})
			})
			.catch(function(error){
				console.log(error)
				res.status(400).json({error :error})
			})

		}

		/*else {
		res.status(401).console.log("Non autorisé !")
		} */
	})
	
	.catch(function(error){
		res.status(401).json({message: "Non autorisé"})
		console.log("Non autorisé bro")
	})	

};



exports.getOneQuestion = function(req, res, next) {
	Question.findOne({_id: req.params.id})
	.then(function(article){
		res.status(200).json({article})
	})
	.catch(function(error){
		res.status(404).json(error)
	})

};


exports.getAllQuestion = function(req, res, next){
	Question.find()
	.then(function(article){
		res.status(200).json({article})
	})
	.catch(function(error){
		res.status(400).json({article})
	})
};


exports.modifyQuestion = function(req, res,next) {
	Question.updateOnr({_id: req.params.id}, {...req.body, _id: req.params.id})
	.then(function(req, res, next){
		res.status(200).json({message: "Question créée"})
	})
	.catch(function(req, res, next){
		res.status(400).json({error})
	})
};


exports.deleteQuestion = function(req, res, next) {
	Question.deleteOne({_id: req.params.id})
	.then(function(req, res, next){
		res.status(200).json({message: "Question supprimée"})
	})
	.catch(function(error){
		res.status(400).json({error})
	})

};
