// let db = firebase.firestore();

let player_name = "Anonymous";
let num_clicks = 0;

toggleSubmitButton();

// UPDATE SCORE
function scoreUpdate() {
    num_clicks += 1;
    // console.log(e);
    let score = document.querySelector("#score");
    score.innerHTML = num_clicks;
    toggleSubmitButton();
}

function highScoreUpdate() {
    let player_name_update = document.querySelector("#playerName");
    let scoreBoard = document.querySelector("#highScore");
    while (scoreBoard.firstChild) {
        scoreBoard.removeChild(scoreBoard.firstChild);
    }

    // Checks if there is a player name exist
    // console.log(player_name_update.value);
    if (player_name_update.value != "") {
        player_name = player_name_update.value;
    }

    // Update the Score!
    // db.collection('click').push({
    //     name: player_name,
    //     score: num_clicks
    // });

    db.collection("click").add({
        name: player_name,
        score: num_clicks
    })
    .then(function() {
        console.log("Score Registered!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    reset();
}

// DISPLAY HIGHSCORE
let highScore = db.collection('click'); //.orderByChild("score").limitToLast(10)
// console.log(highScore);
// highScore.on('value', gotData, errData);

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

    for (let i = 0; i < 25; i++) {
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

function reset() {
    num_clicks = 0;
    let score = document.querySelector("#score");
    document.querySelector('#playerName').value = "";
    score.innerHTML = 0;

    toggleSubmitButton();
}

function toggleSubmitButton() {
    let score_test = document.querySelector("#score");
    if (score_test.innerHTML == 0) {
        document.querySelector("#highScoreUpdateButton").disabled = true;
    } else {
        document.querySelector("#highScoreUpdateButton").disabled = false;
    }
}
