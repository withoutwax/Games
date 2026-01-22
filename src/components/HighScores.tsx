"use client";
import React, { useEffect, useState } from "react";
import firebase from "../firebase";

import Score from "./Score";

const HighScores: React.FC = () => {
  const [games, setGames] = useState<Array<any>>();

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("games").onSnapshot((snapshot) => {
      setGames(snapshot.docs);
    });
  }, []);

  let gamesItems = games;
  if (gamesItems) {
    gamesItems = gamesItems.map((game) => {
      return (
        <Score key={game.id} title={game.data().title} id={game.data().id} />
      );
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center">High Scores</h2>
      <div className="flex flex-wrap justify-center gap-8">{gamesItems}</div>
    </div>
  );
};

export default HighScores;
