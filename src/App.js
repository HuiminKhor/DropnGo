import React from 'react';
import './App.css';
import StyledNavbar from './containers/Navbar'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
import ButtonAppBar from './pages/Navbar.js';
import CustomizedDialogs from './containers/booking';




function App() {
  return (
    <div>
    <div className="App">
      <div className='myNavbar'>
        <ButtonAppBar />
      </div>
      <br />
      </div>
      <div>
        <CustomizedDialogs />
        <StyledNavbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      </div>
      );
    }
    
    export default App;
