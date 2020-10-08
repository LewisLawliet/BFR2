const GoodAnswer = require("../models/GoodAnswer");
const Question = require("../models/Question");


exports.createGoodAnswer = function(req, res, next){
     const question =  Question.findOne({_id: req.params.id}).populate("answer")
      console.log(question)

        const answer = question.Answer1
        console.log(answer)

    delete req.body._id;
    const goodAnswer = new GoodAnswer ({
        ...req.body
    })

    goodAnswer.save()


    .then(function(){
        res.status(201).json({message: "GoodAnswer crée"})
    })

    .catch(function(error){
        console.log(error)
        res.status(400).json({error :error})
    })
};