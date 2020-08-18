const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
		libelle: { type: String, required: true},
		categorie: { type: String, required: true}
		

}) 

module.exports = mongoose.model("Question", questionSchema);