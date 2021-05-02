import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import gameResults from './App.js';
import appData from './App.js';

export const Stats = ({
    totalNumberOfGames
    , winCount
    , loseCount
}) => {

    console.log("From stats page: Wins " + winCount);

    const history = useHistory();

    return(
        <>
        <h2>
            {totalNumberOfGames} Games
            <br/>
            {winCount} Wins
            <br/>
            {loseCount} Losses
        </h2>
        <br />
        <h2> Recent Games </h2>
        <h3>Result: </h3>
        <h3>Score: </h3>
        </>
    );
}

