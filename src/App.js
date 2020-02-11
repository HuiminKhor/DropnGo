import React from 'react';
import './App.css';
<<<<<<< HEAD
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
=======
// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import a2 from './a2.svg';
import { Route } from 'react-router-dom';
import Home from './pages/Home'
import QrCode from './pages/qrcode'
import UserProfile from './pages/UserProfilePage';
import VendorCheck from './pages/Vendor'


>>>>>>> qrcode, user booking page and vendor page added
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
        <CustomizedDialogs />
     </div>
<<<<<<< HEAD
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
=======
     <div>
      <Route exact path="/">
        <Home />
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
    </div>     
>>>>>>> qrcode, user booking page and vendor page added
    </div>
  );
}

export default App;
