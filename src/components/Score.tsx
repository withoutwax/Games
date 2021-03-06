import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

interface ScoreProps {
    title: string,
    id: string
}

const Score: React.FC<ScoreProps> = ({title, id}) => {
    const [scores, setScores] = useState();

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('games').doc(id).collection('highscores').orderBy('score', 'desc').limit(10).onSnapshot(snapshot => {
            
            setScores(snapshot.docs);
        });
    }, [id]); // NOTE: without [id] (and use []), it gives an minor error.

    let scoreItems: any = scores;
    if (scores) {
        scoreItems = scores.map((score: any, i: any) => 
        <li key={i}>{i+1}. {score.data().name} : {score.data().score}</li>
        );
    };
    if (scoreItems && scoreItems.length === 0) {
        scoreItems = 'There is no High Score for this game, yet.';
    }

    return (
        <div className="Score">
            <h4 className="game-title">{title}</h4>
            <ul>
                {scoreItems}
            </ul>
        </div>
    );
};

export default Score;