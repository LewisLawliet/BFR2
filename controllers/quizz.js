const Reponse = require("../models/Reponse");
const User = require("../models/User");
const Question = require("../models/Question");
//const Good = require("../models/GoodAnswer");


exports.createAnswer = async (req, res, next) =>{
    //delete req.body._id;

   
    
    const reponse = new Reponse ({
        ...req.body
    })

     const question = await Question.findById(req.params.id).populate("answer").populate("answers")        
     //const question = await Question.findOne({_id: req.params.id}).populate("answer")
       // console.log(question)

        const Answer = question.answer[0].answers
        const Answer1 = Answer[0] //premire élément de mon tableau "goodAnswer"

        let ToogleAnswer = []

        let ToogleAnswer2 = []

        //console.log(req.body.reponse)

        let checkToogle = null

        

       Answer.map((correctAnswer) => {


          
            if(req.body.reponse === correctAnswer) {
              
                
                 ToogleAnswer.push(true)
            }
           else {
                
                ToogleAnswer2.push(false)

            }

            return null
         }) 


            console.log(ToogleAnswer[0])

          if (ToogleAnswer[0] === true) {

            checkToogle = true
            console.log(checkToogle)

          } 

          else {

            checkToogle = false
            console.log(checkToogle)
            res.status(200).json(Answer1)
          }  

         console.log(Answer1)

        res.status(200).json(checkToogle)
        

}; 



exports.deleteAnswer = function(req, res, next){
    Reponse.deleteOne({_id: req.params.id })
    .then(function(){
        res.status(200).json({message: "Réponse supprimée"})
    })

    .catch(function(error){
        console.log("Suppression ratée")
        res.status(400).json({message: "Suppression ratée"})
    })
};

