const jwt = require("jsonwebtoken");
require('dotenv').config()


module.exports = (function(req, res, next){

	try{
		const token = req.headers.authorization.split(" ")[1];		
		const decodedToken = jwt.verify(token, process.env.KEY);
		//const userId = decodedToken.userId;
		const admin = decodedToken.admin;
		

		if (!admin ) {
			
			throw "User ID Incorrect, réservé à l'admin";
			
		}  

		else {
			next();
			
		}
	}

	catch(error){
		res.status(401).json({error: error || "Requête non autorisée"})
	}



});