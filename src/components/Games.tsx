import React from 'react';
import { useParams } from 'react-router-dom';

interface GamesProps {
    title: string,
    id: string,
    description: string,
    localGame: boolean
}

const Games: React.FC<GamesProps> = ({title, id, description, localGame}) => {
    // console.log(title, id);

    return (
        <main className="Games-container">
            {/* {game} */}
            <div className="game">
                {/* <a href="./"> */}
                    <img className="game-thumbnail" src={ require(`../assets/games/${id}.png`)} alt="" />
                {/* </a> */}
                <br />
                {/* <a href="./"> */}
                    {title}
                {/* </a> */}
                <p>{description}</p>
            </div>
        </main>
    );
};

export default Games;