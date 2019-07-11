import { displayHighScore } from "../scripts/utils";                                

let player_name = "Anonymous";
let num_clicks = 0;

document.querySelector("#click-button").addEventListener("click", scoreUpdate, false);
document.querySelector("#highScoreUpdateButton").addEventListener("click", highScoreUpdate, false);

toggleSubmitButton();

// UPDATE SCORE
function scoreUpdate() {
    num_clicks += 1;
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
db.collection("click").orderBy("score", "desc").onSnapshot(snapshot => {
    gotData(snapshot.docs);
});

function gotData(data) {
    // Resetting the Screen
    let scoreBoard = document.querySelector("#highScore");
    while (scoreBoard.firstChild) {
        scoreBoard.removeChild(scoreBoard.firstChild);
    }

    // OUTPUT HIGHSCORE =================
    displayHighScore(data);
}

function errData(err) {
    console.log('Error!');
    console.log(err);
}

function reset() {
    num_clicks = 0;
    player_name = "Anonymous";
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
