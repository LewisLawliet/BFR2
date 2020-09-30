const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
		libelle: { type: String, required: true},
		categorie: { type: String, required: true},
		answer: { type: mongoose.Schema.Types.ObjectId, ref: "GoodAnswer"}
		

}) 

module.exports = mongoose.model("Question", questionSchema);