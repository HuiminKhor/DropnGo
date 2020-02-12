import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import UserProfile from './pages/UserProfilePage'
import VendorCheck from './pages/Vendor'
import Navbar from './pages/Navbar.js'
import styled from 'styled-components'
import LuggageStorage from './pages/LuggageStorage'
import Payment from './components/payment'
import Alertbar from './components/Alertbar'


function App() {
  const FooterColour = styled.footer`
    background: #ecf0f1;
    bottom: 0;
    position: fixed;
    margin-bottom: 0;
    width: 100%;
  `;

const [message, setMessage] = React.useState({
text:"",
color:""
});


const [openAlert, setOpenAlert] = React.useState(false);
const [color, setColor] = React.useState("");  


  return (
    <>
      {
        message!==""?
        <Alertbar message={message} open={openAlert} color={color} setOpen={setOpenAlert}/>
        : null
      }
    
      <div className="App">
        
        <div className='myNavbar'>
          <Navbar />
        </div>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path="/vendor">
            <VendorCheck />
          </Route>
          <Route path="/luggage-storage/city">
            <LuggageStorage setMessage={setMessage} setOpenAlert={setOpenAlert} setColor={setColor}/>
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>
        <div>
        <FooterColour>BY TEAM GO ALL RIGHT RESERVED 2020</FooterColour>
        </div>
      </div>
    </>  
  );
}

export default App;
