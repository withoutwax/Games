import React, { useState } from 'react';
import firebase from '../../firebase';

const Click: React.FC = () => {
    const [score, setScore] = useState<number>(0);
    const [playerName, setPlayerName] = useState<string>('Anonymous'); 

    const incrementScore = () => {
        setScore(score + 1);
    };

    const updatePlayerName = (event: any) => {
        setPlayerName(event.target.value);
        console.log(playerName);
    }

    const updateScore = () => {
        if (score !== 0) {
            const db = firebase.firestore();
            db.collection('games').doc('click').collection('highscores').add({
                name: playerName,
                score: score
            });
            // Reset Game
            setScore(0);
            setPlayerName('Anonymous');
        }
    };

    return (
        <main className="Click-Game">
            <button className="click-button" onClick={incrementScore}>Click!</button>
            <div className="score">{score}</div>
            <form className="playerName">
                <label className="caption">Player Name</label>
                <input className="input" type="text" onChange={updatePlayerName} placeholder="Anonymous" />
            </form>
            
            <button className="score-submit" onClick={updateScore}>Submit My Score!</button>
        </main>
    );
};

export default Click;