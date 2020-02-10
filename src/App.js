import React from 'react';
import './App.css';
import StyledNavbar from './containers/Navbar'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
import ButtonAppBar from './pages/Navbar.js';
import CustomizedDialogs from './containers/booking';
import styled from 'styled-components'
import LuggageStorage from './pages/LuggageStorage'
import Payment from './pages/Payment'





function App() {
  const FooterColour = styled.footer`
    background: #ecf0f1;
	  bottom: 0;
  `;


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
          <Route path="/luggage-storage/city">
            <LuggageStorage />
            </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>  
        <FooterColour>BY TEAM GO ALL RIGHT RESERVED 2020</FooterColour>

       </div>
    </div>
  );
}

export default App;
