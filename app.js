 const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const articleSocieteRoutes = require("./routes/societe");
const articleCulturePopRoutes = require("./routes/culture-pop");
const userRoutes = require("./routes/user");
const quizzThemeRoutes = require("./routes/themeQuizz");
const reponseQuizzRoutes = require("./routes/quizz");
const buttonAdmin = require("./routes/buttonBackAdmin");

const app = express();

mongoose.connect("mongodb+srv://Nadir:FilRouge@clusterfilrouge-dszxk.mongodb.net/test?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false  })
.then(function(){
  console.log("Connexion à MongoDB réussie amigo !")
})
.catch(function(){
  console.log("Connexion à Mongo réussie ... Non je déconne !... ratée! ^^ ")
});

app.use(function(req, res, next)  {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/societe", articleSocieteRoutes);
app.use("/api/culture-pop", articleCulturePopRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/theme-quizz", quizzThemeRoutes);
app.use("/api/quizz", reponseQuizzRoutes);
app.use("/api/button", buttonAdmin);

module.exports = app;
