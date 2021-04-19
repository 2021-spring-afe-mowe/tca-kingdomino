import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Home = ({
    totalNumberOfGames
    , totalNumberOfWins
    , totalNumberOfLosses
}) => {

    const history = useHistory();

    return(
        <>
        <h1>
            Games: ({totalNumberOfGames})
            Wins: ({totalNumberOfWins})
            Losses: ({totalNumberOfLosses})
        </h1>
        </>
    );
}

