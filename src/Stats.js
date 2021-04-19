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
            Games: ({totalNumberOfGames})
            <br/>
            Wins: ({totalNumberOfWins})
            <br/>
            Losses: ({totalNumberOfLosses})
        </h2>
        </>
    );
}

