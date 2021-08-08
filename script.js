let currentQuestion = 0;

showQuestion();

function showQuestion(){
    if(questions[currentQuestion]){
        let q = questions[currentQuestion];

        document.querySelector(".scoreArea").style.display = "none";
        document.querySelector(".questionArea").style.display = "block";

        document.querySelector(".question").innerHTML = q.question;
    } else {

    }
}