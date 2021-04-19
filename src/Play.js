import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactDOM from 'react-dom';

export const Play = ({
    appWinGame
    , appLoseGame
}) => {

    const history = useHistory();

    const winGame = () => {
        appWinGame(name, score);
        history.goBack();

    };

    const loseGame = () => {
        appLoseGame(name, score);
        history.goBack();
    };

    const [name, updateName] = useState("");

    const [score, updateScore] = useState("");

    const nameChanged = (e) => {
        updateName(e.target.value);
    };

    const scoreChanged = (e) => {
        updateScore(e.target.value);
    }

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