function triviaQuizController() {

    let totalQuestions = TRIVIA.length;
    let totalAnswers = TRIVIA_ANSWERS.length;

    console.log(TRIVIA);
    console.log('total questions: ' + totalQuestions);
    console.log('total answers: ' + totalAnswers);

    for (let x = 0; x < totalQuestions; x++) {
        let triviaObject = TRIVIA[x];
        let triviaAnswer = TRIVIA_ANSWERS[x];
        let userAnswer = "answer2w";
        console.log(triviaObject.question);
        console.log(triviaObject.answer(userAnswer, triviaAnswer.answer));
    }

}

$(triviaQuizController);