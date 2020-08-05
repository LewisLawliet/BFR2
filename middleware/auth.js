const jwt = require("jsonwebtoken");


module.exports = (function(req, res, next){

	try{
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, "RANDOM_SECRET_KEY");
		const userId = decodedToken.userId;
		if (req.body.userID && req.body.userID !== userId) {
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