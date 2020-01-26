import React from 'react';
import HighScores from './HighScores';

import Click from './games/Click';

const Games: React.FC = () => {
    return (
        <main className="Games">
            <h1>Games</h1>
            <Click />
            
            <HighScores />
        </main>
    );
};

export default Games;