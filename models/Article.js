const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
		titleArticle: { type: String, required: true},
		contenuArticle: { type: String, required: true},
		categorie: {type: String, required: true}

}) 

module.exports = mongoose.model("Article", articleSchema);