import React, { useEffect, useState } from "react";
import firebase from "../firebase";

interface ScoreProps {
  title: string;
  id: string;
}

const Score: React.FC<ScoreProps> = ({ title, id }) => {
  const [scores, setScores] = useState<any[]>();

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("games")
      .doc(id)
      .collection("highscores")
      .orderBy("score", "desc")
      .limit(10)
      .onSnapshot((snapshot) => {
        setScores(snapshot.docs);
      });

    return () => unsubscribe();
  }, [id]);

  let scoreItems: React.ReactNode = null;

  if (scores) {
    scoreItems = scores.map((score: any, i: any) => {
      const data = score.data();

      // [핵심] 필터링된 이름(cleanName)이 있으면 그걸 쓰고,
      // 없으면(아직 서버 처리 전이거나 옛날 데이터) 원래 이름(name)을 씁니다.
      const displayName = data.cleanName || data.name || "Anonymous";

      return (
        <li key={score.id}>
          {i + 1}. {displayName} : {data.score}
        </li>
      );
    });
  }

  if (scores && scores.length === 0) {
    scoreItems = (
      <div className="no-score">There is no High Score for this game, yet.</div>
    );
  }

  return (
    <div className="bg-grey-color-01 p-6 flex flex-col items-center w-[250px]">
      <h4 className="text-xl">{title}</h4>
      <ul className="list-none pl-4">{scoreItems}</ul>
    </div>
  );
};

export default Score;
