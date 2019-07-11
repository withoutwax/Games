export function displayHighScore(scoreList) {
    let i = 0;
    while (i <= 10 && i < scoreList.length) {
        // console.log(i);
        let name = scoreList[i].data().name;
        // console.log(name, name.length);
        if (name.length > 10) {
            name = name.substring(0, 10);
        }
        let score = scoreList[i].data().score;
        // console.log(score);

        let scoreBoard = document.querySelector("#highScore");

        let li = document.createElement("li",);
        li.textContent =  name + " : " + score;

        scoreBoard.appendChild(li);
        i += 1;
    }
}