// DISPLAY HIGHSCORE

db.collection("click").orderBy("score")
    .onSnapshot(snapshot => {
        gotData(snapshot.docs)
    });


function gotData(data) {
    // Resetting the Screen
    let scoreBoard = document.querySelector("#highScore");
    while (scoreBoard.firstChild) {
        scoreBoard.removeChild(scoreBoard.firstChild);
    }

    let score_list = data;

    // console.log(score_list);

    // OUTPUT HIGHSCORE =================
    for (let i = 0; i < 10; i++) {
        // console.log(score_list[i].data());
        let name = score_list[i].data().name;
        // console.log(name, name.length);
        if (name.length > 10) {
            name = name.substring(0, 10);
        }
        let score = score_list[i].data().score;
        // console.log(score);

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
