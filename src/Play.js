import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Play = ({
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
                Enter your game here.
            </h1>

            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formGameScore">
                    <Form.Label>Score</Form.Label>
                    <Form.Control type="number" placeholder="Enter game score" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}