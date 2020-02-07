const TRIVIA = [ 
    {
        number: 1,
        question: "Question 1",
        possibleAnswers: ["answer1, answer2, answer3, answer4"],
        answer: function(userAnswer, correctAnswer) {
            console.log('user answer:' + userAnswer);
            console.log('trivia answer: ' + correctAnswer);
            if (userAnswer === correctAnswer)
                return "Excellent! Question 1 content here!";
            else
            return `Wrong ${userAnswer} is not even close!`;
        }
    }
];

const TRIVIA_ANSWERS = [
    {
        number: 1,
        answer: "answer2"
    }
];