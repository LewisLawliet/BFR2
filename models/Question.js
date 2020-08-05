const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
		libelle: { type: String, required: true}
		//reponse: { type: String, required: true}
		

}) 

module.exports = mongoose.model("Question", questionSchema);