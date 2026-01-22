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

        // 2. 정화된 이름(cleanName)으로 DB에 저장
        const db = firebase.firestore();
        db.collection("games").doc("click").collection("highscores").add({
          name: cleanName, // 여기가 핵심입니다!
          score: score,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(), // 정렬을 위해 시간도 넣으면 좋습니다
        });
      } catch (e) {
        console.error("Filtering failed, using original name", e);
      }

      // Reset Game
      setScore(0);
      setPlayerName("Anonymous");
    }
  };

  return (
    <main className="flex flex-col items-center py-16 px-40">
      <button
        className="font-[family-name:var(--font-04b03)] text-[5em] text-black bg-white p-[50px] w-[30vw] border-[10px] border-red-color hover:text-white hover:bg-red-color active:translate-y-1 active:shadow-[0_5px_#666]"
        onClick={incrementScore}
      >
        Click!
      </button>
      <div className="text-[10em]">{score}</div>
      <form
        className="font-[family-name:var(--font-04b03)] flex flex-col mb-12"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* form submit 시 새로고침 방지 */}
        <label className="mb-2">Player Name</label>
        <input
          className="font-[family-name:var(--font-04b03)] bg-[#40464c] h-auto w-[500px] border-none text-[5em] text-white p-4 text-center"
          type="text"
          onChange={updatePlayerName}
          placeholder="Anonymous"
          value={playerName === "Anonymous" ? "" : playerName} // UX 개선
        />
      </form>

      <button
        className="font-[family-name:var(--font-04b03)] text-[2em] text-black bg-white p-[20px] w-[20vw] border-[10px] border-green-color hover:text-white hover:bg-green-color active:translate-y-1 active:shadow-[0_5px_#666]"
        onClick={updateScore}
      >
        Submit My Score!
      </button>
    </main>
  );
};

export default Click;
