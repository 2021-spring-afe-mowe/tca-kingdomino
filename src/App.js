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

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App = () => (
  
  <MemoryRouter>
    
  <>
  <Container>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">tca-kingdomino</Navbar.Brand>
    <Nav className="mr-auto">
    
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
            <LinkContainer to="/">
            <li class="nav-item">
              <a class="nav-link active">Home</a>
            </li>
            </LinkContainer>
      
      <li class="nav-item">     
            <LinkContainer to="/about">
              <a class="nav-link active">About</a>
            </LinkContainer>
      </li>
      <li class="nav-item"> 
            <LinkContainer to="/users">
              <a class="nav-link active">Users</a>         
            </LinkContainer>
      </li>       
    </ul> 
    </Nav>
  </Navbar>
  
</Container>
  </>

<Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <h2>
          Current Page is{' '}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </h2>
      </Jumbotron>
    </Container>
  </MemoryRouter>
);

export default App;
