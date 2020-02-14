import React, {useState} from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import UserProfile from './pages/UserProfilePage'
import VendorCheck from './pages/Vendor'
import Navbar from './pages/Navbar.js'
import styled from 'styled-components'
import LuggageStorage from './pages/LuggageStorage'
import PaymentPage from './pages/PaymentPage'
import Alertbar from './components/Alertbar'
import axios from 'axios'

export const User = React.createContext(null)


const FooterColour = styled.footer`
    background: #ecf0f1;
    bottom: 0;
    position: fixed;
    margin-bottom: 0;
    width: 100%;
    `;

function App() {
  
  
  const [loggedIn, setLoggedIn] = useState(false) // Logged in state
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user'))) // current user
  
  const [openFsd, setOpenFsd] = useState(false); // state for the FullScreenDialog (Fsd)
  const [message, setMessage] = React.useState({
    text:"",
    color:""
    });


  const [openAlert, setOpenAlert] = React.useState(false);
  const [color, setColor] = React.useState("");  
  
  const handleLogin = (e) => {
    e.preventDefault()
    axios({
      method: 'GET',
      url: `https://dropandgo.herokuapp.com/api/v1/users/1`
    })
    .then(response => {
        console.log(response.data)
        localStorage.setItem('user',JSON.stringify(response.data))
        setLoggedIn(true) // really need to add a loader in here
        setCurrentUser(response.data)
        // do something with the data returned
    })
    .catch(error => {
        console.error(error.response.data.message)
        // do something to deal with or show the error
    })
    handleFsdClose()
  }
  console.log(currentUser)
  const handleLogout = () => {
    setLoggedIn(false)
    setCurrentUser({})
  }

  const handleFsdOpen = () => {
    setOpenFsd(true);
  };

  const handleFsdClose = () => {
    setOpenFsd(false);
  };

  return (
    <User.Provider value={{ 
      currentUser, 
      loggedIn, 
      handleLogin,
      handleLogout, 
      handleFsdOpen, 
      handleFsdClose,
      openFsd }}>
      {
        message!==""?
        <Alertbar message={message} open={openAlert} color={color} setOpen={setOpenAlert}/>
        : null
      }
    
      <div className="App">
        
        <div className='myNavbar'>
          <Navbar/>
        </div>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path="/vendor/:id">
            <VendorCheck />
          </Route>
          <Route path="/luggage-storage/:city">
            <LuggageStorage setMessage={setMessage} setOpenAlert={setOpenAlert} setColor={setColor}/>
          </Route>
          <Route path="/payment">
            <PaymentPage />
          </Route>
        </Switch>
        <div>
        <FooterColour>BY TEAM GO ALL RIGHT RESERVED 2020</FooterColour>
        </div>
      </div>
    </User.Provider>  
  );
}

export default App;
