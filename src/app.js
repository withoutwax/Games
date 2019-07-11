import { db } from "./scripts/firestore";
import { displayHighScore } from "./scripts/utils";

// DISPLAY HIGHSCORE
db.collection("click").orderBy("score", "desc")
    .onSnapshot(snapshot => {
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