const jwt = require("jsonwebtoken");
require('dotenv').config()


module.exports = (function(req, res, next){

	try{
		const token = req.headers.authorization.split(" ")[1];
		//const token = req.headers("x-auth-token").split(" ")[1];
		const decodedToken = jwt.verify(token, process.env.KEY);
		const userId = decodedToken.userId;
		console.log(decodedToken)
		
		if (req.body.userId && req.body.userId !== userId) {
			
		console.log(req.body.userId)
			throw "User ID Incorrect";
		}  

		else {
			next();
		}
	}

	catch(error){
		res.status(401).json({error: error || "Requête non autorisée"})
	}



});