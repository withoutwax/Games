import React from 'react';
import { useParams } from 'react-router-dom';

import Click from './games/Click';

const Play: React.FC = () => {

    let { gameId } = useParams();

    if (gameId === 'click') {
        return (
            <Click />
        );
    } else if (gameId === 'snake') {
        return (
            <div>
                'Snake Game coming soon...'
            </div>
        );
    } else {
        return (
            <div>
                {gameId}
            </div>
        );
    }

};

export default Play;