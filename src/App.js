import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import { Home } from './Home';

import { Play } from './Play';

import { Stats } from './Stats';

import { useState } from 'react';

import './App.css';

// const Play = () => <span>Play</span>;

// const Stats = () => <span>Stats</span>;

const Leaderboard = () => <span>Leaderboard</span>;

function App() {

  const initialAppData = {
    gameResults: []
    , currentGameStartTime: null
  };

  const [appData, updateAppData] = useState(initialAppData);

  console.log(appData);

  // App notification functions

  const startGame = () => {
    updateAppData({
      ...appData
      , currentGameStartTime: Date.now()
    });

    console.log("App.startGame()", appData.currentGameStartTime);
  }

  const winGame = (name, score, oneCrown, twoCrown, threeCrown) => {
    updateAppData({
      ...appData
      , gameResults: [
        ...appData.gameResults
        , {
          startDateTime: appData.currentGameStartTime
          , endDateTime: Date.now()
          , gameResult: "W"
          , playerName: name
          , playerScore: score
          , singleCrownCount: oneCrown
          , doubleCrownCount: twoCrown
          , tripleCrownCount: threeCrown
        }
      ]
    });
    console.log(appData);
  }

  const loseGame = (name, score, oneCrown, twoCrown, threeCrown) => {
    updateAppData({
      ...appData
      , gameResults: [
        ...appData.gameResults
        , {
          startDateTime: appData.currentGameStartTime
          , endDateTime: Date.now()
          , gameResult: "L"
          , playerName: name
          , playerScore: score
          , "# of Single Crowns:": oneCrown
          , "# of Double Crowns:": twoCrown
          , "# of Triple Crowns:": threeCrown
        }
      ]
    })
  }

  const calculateGameTimeFacts = () => {
    
    const gameTimes = appData.gameResults.map(x => x.endDateTime - x.startDateTime);

    return {
      longest: Math.max(...gameTimes)
      , shortest: Math.min(...gameTimes)
    };
  };


  return (
  
  <MemoryRouter>
    
  <>
  <Container>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">tca-kingdomino</Navbar.Brand>
    <Nav className="mr-auto">
      
            <LinkContainer to="/">
            <Nav.Item as="li">
              <Nav.Link  as="a" to="/">Home</Nav.Link>
            </Nav.Item>
            </LinkContainer>
      
           
            <LinkContainer to="/stats">
            <Nav.Item as="li">
              <Nav.Link as="a" to="/stats">Stats</Nav.Link>
            </Nav.Item>
            </LinkContainer>

    </Nav>
  </Navbar>
  
</Container>
  </>

<Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome to Kingdomino Companion App</h1>
          <Switch>
            <Route path="/stats">
              <Stats 
                allGameResults={appData.gameResults}
              />
            </Route>
            <Route path="/play">
              <Play
                appWinGame={winGame}
                appLoseGame={loseGame}
              />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/">
            <Home
            totalNumberOfGames={appData.gameResults.length}
            appStartGame={startGame}
            gameTimeFacts={calculateGameTimeFacts()}
          />
            </Route>
          </Switch>
      </Jumbotron>
    </Container>
  </MemoryRouter>

  );

};

export default App;
