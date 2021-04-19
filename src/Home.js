import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Home = ({
    totalNumberOfGames
    , appStartGame
}) => {

    const history = useHistory();

    const startGame = () => {
        appStartGame();
        history.push("/play");
    };

    return(
        <>
            <h1>
                Ready to play?
            </h1>

            <Button variant="primary" onClick={startGame}>
                New Game
            </Button>
        </>
    );
}