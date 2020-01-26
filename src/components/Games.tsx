import React from 'react';
import HighScores from './HighScores';

const Games: React.FC = () => {
    return (
        <main className="Games">
            <HighScores />
            <div>•</div>
            Lists of Games will be here.
        </main>
    );
};

export default Games;