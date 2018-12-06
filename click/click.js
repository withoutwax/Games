let database = firebase.database();
let player_name = "Anonymous";
let num_clicks = 0;

// UPDATE SCORE
function scoreUpdate() {
    num_clicks += 1;
    console.log(num_clicks);
    let score = document.querySelector("#score");
    score.innerHTML = num_clicks;
}

function highScoreUpdate() {
    let scoreBoard = document.querySelector("#highScore");
    while (scoreBoard.firstChild) {
        scoreBoard.removeChild(scoreBoard.firstChild);
    }

    // Checks if there is a player name exist
    let player_name_update = document.querySelector("#playerName");
    if (player_name_update.value != "") {
        player_name = player_name_update.value;
    }

    // Update the Score!
    let ref = database.ref('scores/click').push({
        name: player_name,
        score: num_clicks
    });
    console.log(ref.key);

}

// HIGHSCORE
let highScore = database.ref('scores/click'); //.orderByChild("score").limitToLast(10)
// console.log(highScore);
highScore.on('value', gotData, errData);

function gotData(data) {
    console.log(data.val());

    let score_list = data.val();
    let keys = Object.keys(score_list);
    let values = Object.values(score_list);
    // console.log(keys);
    // console.log(values);
    // console.log(values[0]);
    // console.log(values[0]["name"]);
    // console.log(values[0]["score"]);

    // SORTING HIGHSCORE =================
    let sorted_scores = []
    for (let i = 0; i < values.length; i++) {
        // console.log(values[i]);
        sorted_scores.push([values[i]["name"], values[i]["score"]]);
    }
    sorted_scores.sort(function(a, b) {
        return b[1] - a[1];
    });

    // let sort_scores = [];
    // console.log(score_list.length);

    for (let i = 0; i < sorted_scores.length; i++) {
        // console.log(sorted_scores[i]);
        let name = sorted_scores[i][0];
        let score = sorted_scores[i][1];

        let scoreBoard = document.querySelector("#highScore");

        let li = document.createElement("li",);
        li.textContent =  name + " : " + score;
        // let score_text = document.createTextNode(name, ":", score);
        // li.appendChild(score_text);
        // console.log(li);

        scoreBoard.appendChild(li);
    }
}

function errData(err) {
    console.log('Error!');
    console.log(err);
}
