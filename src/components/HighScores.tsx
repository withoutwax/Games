import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

import Score from './Score';

const HighScores: React.FC = () => {
    const [games, setGames] = useState<Array<any>>();

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('games').onSnapshot(snapshot => {
            setGames(snapshot.docs);
        });
    }, []);

    let gamesItems = games;
    if (gamesItems) {
        gamesItems = gamesItems.map((game) => {
            return (
                <Score key={game.id} title={game.data().title} id={game.data().id}/>
            );
        });
    }

    return (
        <div className="HighScore">
            <h2 className="main-title">High Scores</h2>
            <div className="Score-Container">{gamesItems}</div>
        </div>
    );
};

export default HighScores;