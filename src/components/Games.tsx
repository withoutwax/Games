import React from 'react';

interface GamesProps {
    title: string,
    id: string
}

const Games: React.FC<GamesProps> = ({title, id}) => {
    console.log(title, id);

    return (
        <main className="Games-container">
            {/* {game} */}
            <div className="game">
                <a href="./"><img className="game-thumbnail" src={ require(`../assets/games/${id}.png`)} alt="" /></a>
                <br />
                <a href="./">{title}</a>
                <p>The most simple click game!</p>
            </div>
        </main>
    );
};

export default Games;