import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import {
    useRouteMatch,
    Link,
    Switch,
    Route
} from 'react-router-dom';

import HighScores from './HighScores';
import Games from './Games';
import Play from './Play';

const GamesList: React.FC = () => {
    const [gamesList, setGamesList] = useState<Array<any>>();

    useEffect(() => {
        const db = firebase.firestore();
        db.collection('games').onSnapshot(snapshot => {
            setGamesList(snapshot.docs);
        });
    }, []);

    let match = useRouteMatch();
    let gamesItems = gamesList;

    if (gamesItems) {    
        gamesItems = gamesItems.map((game) => {
            let localGame: boolean = false;
            if (game.data().localGame) {
                localGame = game.data().localGame;
            }
            return (
                <Link to={`${match.url}/${game.data().id}`} key={game.id}>
                    <Games key={game.id} title={game.data().title} id={game.data().id} description={game.data().description} localGame={localGame} />
                </Link>
            );
        });
    }

    return (
        <main className="GamesList">
            <h1>Games List</h1>
            
            <Switch>
                <Route exact path={`${match.path}`}>
                    <div className="games-container">{gamesItems}</div>
                </Route>
                <Route path={`${match.path}/:gameId`}>
                    <div>
                        <Play />
                    </div>
                </Route>
            </Switch>

            <HighScores />
        </main>
    );
};

export default GamesList;