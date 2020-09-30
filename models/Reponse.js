const mongoose = require("mongoose");


const reponseSchema = mongoose.Schema({
	reponse: { type: String, required: true},
	reponseCorrect: { type: String, required: false}
}) 


module.exports = mongoose.model("Reponse", reponseSchema);