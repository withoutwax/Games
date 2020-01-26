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
        const db = firebase.firestore();
        db.collection('games').doc('click').collection('highscores').add({
            name: playerName,
            score: score
        });
        // Reset Game
        setScore(0);
        setPlayerName('Anonymous');
    };

    return (
        <main>
            <button onClick={incrementScore}>Click!</button>
            <div>{score}</div>
            <form>
                <label>Player Name</label>
                <input type="text" onChange={updatePlayerName} placeholder="Anonymous" />
            </form>
            
            <button onClick={updateScore}>Submit My Score!</button>
        </main>
    );
};

export default Click;