const mongoose = require("mongoose");


const reponseSchema = mongoose.Schema({
	reponse: { type: String, required: true}

}) 


module.exports = mongoose.model("Reponse", reponseSchema);