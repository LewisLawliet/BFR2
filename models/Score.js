const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
		grade: { type: String, required: true}
		

}) 

module.exports = mongoose.model("Score", scoreSchema);

//maj