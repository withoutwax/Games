import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
// import Click from './games/Click';

import HighScores from './HighScores';
import Games from './Games';

const GamesList: React.FC = () => {
    const [gamesList, setGamesList] = useState<Array<any>>();

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('games').onSnapshot(snapshot => {
            setGamesList(snapshot.docs);
        });
    }, []);

    let gamesItems = gamesList;
    if (gamesItems) {
        gamesItems = gamesItems.map((game) => {
            return (
                <Games key={game.id} title={game.data().title} id={game.data().id}/>
            );
        });
    }

    return (
        <main className="GamesList">
            <h1>Games List</h1>
            <div className="games-container">{gamesItems}</div>
            <HighScores />
        </main>
    );
};

export default GamesList;