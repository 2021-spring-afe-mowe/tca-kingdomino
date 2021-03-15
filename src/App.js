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

import './App.css';

const Home = () => <span>Home</span>;

const Stats = () => <span>Stats</span>;

const Leaderboard = () => <span>Leaderboard</span>;

const App = () => (
  
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
       
            <LinkContainer to="/leaderboard">
            <Nav.Item as="li">
              <Nav.Link as="a" to="/leaderboard"> Leaderboard</Nav.Link>
            </Nav.Item>        
            </LinkContainer>

    </Nav>
  </Navbar>
  
</Container>
  </>

<Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome to Kingdomino Companion App</h1>
        <h2>
          Current Page is{' '}
          <Switch>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </h2>
        
        <Button variant="primary" size="lg" block>
    New Game
  </Button>
        
      </Jumbotron>
    </Container>
  </MemoryRouter>
);

export default App;
