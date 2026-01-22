import React, { useState } from "react";
import firebase from "../../firebase"; // 경로 확인 필요
import FilterKo from "badwords-ko";
import { Filter as FilterEn } from "bad-words";

const Click: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [playerName, setPlayerName] = useState<string>("Anonymous");

  // 필터 인스턴스 생성
  const filterKo = new FilterKo();
  const filterEn = new FilterEn();

  const incrementScore = () => {
    setScore(score + 1);
  };

  const updatePlayerName = (event: any) => {
    setPlayerName(event.target.value);
  };

  const updateScore = () => {
    if (score !== 0) {
      // 1. 이름 정화 (필터링) 시작
      let cleanName = playerName || "Anonymous"; // 값이 없으면 Anonymous

      try {
        // 영어 욕설 필터링
        cleanName = filterEn.clean(cleanName);
        // 한국어 욕설 필터링 (결과를 이어서 다시 필터링)
        cleanName = filterKo.clean(cleanName);
      } catch (e) {
        console.error("Filtering failed, using original name", e);
      }

      // 2. 정화된 이름(cleanName)으로 DB에 저장
      const db = firebase.firestore();
      db.collection("games").doc("click").collection("highscores").add({
        name: cleanName, // 여기가 핵심입니다!
        score: score,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), // 정렬을 위해 시간도 넣으면 좋습니다
      });

      // Reset Game
      setScore(0);
      setPlayerName("Anonymous");
    }
  };

  return (
    <main className="Click-Game">
      <button className="click-button" onClick={incrementScore}>
        Click!
      </button>
      <div className="score">{score}</div>
      <form className="playerName" onSubmit={(e) => e.preventDefault()}>
        {/* form submit 시 새로고침 방지 */}
        <label className="caption">Player Name</label>
        <input
          className="input"
          type="text"
          onChange={updatePlayerName}
          placeholder="Anonymous"
          value={playerName === "Anonymous" ? "" : playerName} // UX 개선
        />
      </form>

      <button className="score-submit" onClick={updateScore}>
        Submit My Score!
      </button>
    </main>
  );
};

export default Click;
