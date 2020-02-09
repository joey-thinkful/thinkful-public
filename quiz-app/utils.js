function getGrade(myPercentage) {
/* returns a letter grade based on the score */
let grade = '';
    if (myPercentage < 60) {
        grade = 'F. Maybe try again?';
    } else if (myPercentage => 60 && myPercentage < 70) {
        grade = 'D. You passed, but barely.';
    } else if (myPercentage >= 70 && myPercentage < 80) {
        grade = 'C. Meh - its average.';
    } else if (myPercentage >= 80 && myPercentage < 90) {
        grade = 'B. Not bad!'
    } else {
        grade = 'A. Excellent job space cadet!';
    }

    return grade;
}

function percentage(partialValue, totalValue) {
/* returns a percentage based on the correct questions and total questions */
return Math.round((100 * partialValue) / totalValue);
}