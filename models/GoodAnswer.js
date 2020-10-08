const mongoose = require("mongoose");


const GoodAnswerSchema = mongoose.Schema({
	
	//categorie: { type: String, required: false},
	answers: [{type: String}]

}) 


module.exports = mongoose.model("GoodAnswer", GoodAnswerSchema);