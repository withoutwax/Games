import React from 'react';
import HighScores from './HighScores';

const Games: React.FC = () => {
    return (
        <main className="Games">
            <h1>Games</h1>
            Lists of Games will be here.
            
            <HighScores />
        </main>
    );
};

export default Games;