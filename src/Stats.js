import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Stats = ({
    totalNumberOfGames
    , totalNumberOfWins
    , totalNumberOfLosses
}) => {

    const history = useHistory();

    return(
        <>
        <h2>
            {totalNumberOfGames} Games
            <br/>
            {totalNumberOfWins} Wins
            <br/>
            {totalNumberOfLosses} Losses
        </h2>
        </>
    );
}

