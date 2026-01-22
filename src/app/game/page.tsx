"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import firebase from "../../firebase";
import Games from "../../components/Games";

export default function GamePage() {
  const [gamesList, setGamesList] = useState<Array<any>>();

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("games").onSnapshot((snapshot) => {
      setGamesList(snapshot.docs);
    });
    return () => unsubscribe();
  }, []);

  let gamesItems: any[] | undefined = gamesList;

  if (gamesItems) {
    gamesItems = gamesItems.map((game) => {
      let localGame: boolean = false;
      // Access data using .data() method if it's a Firestore document
      const data = game.data ? game.data() : game;

      if (data.localGame) {
        localGame = data.localGame;
      }
      return (
        <Link href={`/game/${data.id}`} key={game.id}>
          <Games
            key={game.id}
            title={data.title}
            id={data.id}
            description={data.description}
            localGame={localGame}
          />
        </Link>
      );
    });
  }

  return (
    <div className="GamesList">
      <h1 className="games-list-container-title">Games List</h1>
      <div className="games-list-container">{gamesItems}</div>
    </div>
  );
}
