import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import QrCode from './pages/qrcode'
import UserProfile from './pages/UserProfilePage';
import VendorCheck from './pages/Vendor'
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
    <div className="App">
      
      <div className='myNavbar'>
        <ButtonAppBar />
        <CustomizedDialogs />
      </div>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/qr">
          <QrCode />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/vendor">
          <VendorCheck />
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
  );
}

export default App;
