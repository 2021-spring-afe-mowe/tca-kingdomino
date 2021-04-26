import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Image';

export const Play = ({
    appWinGame
    , appLoseGame
}) => {

    const history = useHistory();

    const winGame = () => {
        appWinGame(name, score, oneCrown. twoCrown, threeCrown);
        history.goBack();

    };

    const loseGame = () => {
        appLoseGame(name, score);
        history.goBack();
    };

    const [name, updateName] = useState("");

    const [score, updateScore] = useState("");

    const [oneCrown, updateOneCrown] = useState("");

    const [twoCrown, updateTwoCrown] = useState("");

    const [threeCrown, updateThreeCrown] = useState("");

    const nameChanged = (e) => {
        updateName(e.target.value);
    };

    const scoreChanged = (e) => {
        updateScore(e.target.value);
    }

    const oneCrownChanged = (e) => {
        updateOneCrown(e.target.value);
    }

    const twoCrownChanged = (e) => {
        updateTwoCrown(e.target.value);
     }

     const threeCrownChanged = (e) => {
        updateThreeCrown(e.target.value);
     }

    //const gameWon = () => {
      //  updateWins
    //}

    return (
        <>
            <h2>
                Enter game details:
            </h2>

            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={nameChanged} type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formGameScore">
                    <Form.Label>Score</Form.Label>
                    <Form.Control value={score} onChange={scoreChanged} type="number" placeholder="Enter game score" />
                </Form.Group>

                <Form.Group controlId="formCrowns">
                    <Form.Label>Number of Crowns</Form.Label>

                    <h3>1x </h3>
                    <Form.Control value={oneCrown} onChange={oneCrownChanged} type="number" placeholder="Enter number of single crowns" />

                    <h3>2x </h3>
                    <Form.Control value={twoCrown} onChange={twoCrownChanged} type="number" placeholder="Enter number of double crowns" />

                    <h3>3x </h3>
                    <Form.Control value={threeCrown} onChange={threeCrownChanged} type="number" placeholder="Enter number of triple crowns" />
                </Form.Group>

                <Button
                    onClick={winGame}
                    type="submit"
                >
                    Win
                </Button>
                &nbsp;
                <Button
                    onClick={loseGame}
                    type="submit"
                >
                    Lose
                </Button>
                
            </Form>

            
        </>
    );

    
};