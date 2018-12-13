let database = firebase.database();


// DISPLAY HIGHSCORE
let highScore = database.ref('scores/click'); //.orderByChild("score").limitToLast(10)
// console.log(highScore);
highScore.on('value', gotData, errData);

function gotData(data) {
    // Resetting the Screen
    let scoreBoard = document.querySelector("#highScore");
    while (scoreBoard.firstChild) {
        scoreBoard.removeChild(scoreBoard.firstChild);
    }

    let score_list = data.val();
    let keys = Object.keys(score_list);
    let values = Object.values(score_list);

    // SORTING HIGHSCORE =================
    let sorted_scores = []
    for (let i = 0; i < values.length; i++) {
        // console.log(values[i]);
        sorted_scores.push([values[i]["name"], values[i]["score"]]);
    }
    sorted_scores.sort(function(a, b) {
        return b[1] - a[1];
    });

    for (let i = 0; i < 10; i++) {
        // console.log(sorted_scores[i]);
        let name = sorted_scores[i][0];
        // console.log(name, name.length);
        if (name.length > 10) {
            name = name.substring(0, 10);
        }
        let score = sorted_scores[i][1];

        let scoreBoard = document.querySelector("#highScore");

        let li = document.createElement("li",);
        li.textContent =  name + " : " + score;

        scoreBoard.appendChild(li);
    }
}

function errData(err) {
    console.log('Error!');
    console.log(err);
}
