import React, {useState, useEffect} from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import UserProfile from './pages/UserProfilePage'
import VendorCheck from './pages/Vendor'
import Navbar from './pages/Navbar.js'
import styled from 'styled-components'
import LuggageStorage from './pages/LuggageStorage'
import PaymentPage from './pages/PaymentPage'
import PaymentComplete from './pages/PaymentComplete'
import LoadingIndicator from './components/LoadingIndicator'
import Alertbar from './components/Alertbar'
import axios from 'axios'

export const User = React.createContext(null)


const FooterColour = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #ecf0f1;
  font-weight: bold;
  padding-top: 10px;
    `;

function App() {
  
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user'))) // current user
  const [loggedIn, setLoggedIn] = useState(currentUser ? true : false) // Logged in state

  const [openFsd, setOpenFsd] = useState(false); // state for the FullScreenDialog (Fsd)
  const [message, setMessage] = React.useState({
    text:"",
    color:""
    });

  const [ isLoading, setIsLoading ] = useState(true)
  const [openAlert, setOpenAlert] = React.useState(false);
  const [color, setColor] = React.useState("");  

  useEffect(()=>{
    setIsLoading(false)
  },[])

  function handleLogin (e) {
    setIsLoading(true)
    e.preventDefault()
    axios({
      method: 'GET',
      url: `https://dropandgo.herokuapp.com/api/v1/users/6`
    })
    .then(response => {
        console.log(response.data)
        localStorage.setItem('user',JSON.stringify(response.data))
        setCurrentUser(response.data)
        setLoggedIn(true) // need to wait before we do this
        setMessage("Login Successful")
        setOpenAlert(true)
        setColor("success")
        setIsLoading(false)
        handleFsdClose()
    })
    .catch(error => {
        console.error(error.response.data.message)
        // do something to deal with or show the error
    })
  }

  function handleLogout() {
    setLoggedIn(false)
    localStorage.removeItem('user')
    setCurrentUser({})
    setMessage("Logout Successful")
    setOpenAlert(true)
    setColor("info")
  }

  function handleFsdOpen() {
    setOpenFsd(true);
  };

  function handleFsdClose() {
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
      openFsd,
      isLoading,
      setIsLoading }}>
      {
        message!==""?
        <Alertbar message={message} open={openAlert} color={color} setOpen={setOpenAlert}/>
        : null
      }
    
      <div className="App">
        
        <div className='myNavbar'>
          <Navbar/>
        </div>
        { isLoading ? 
          <LoadingIndicator  /> : 
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/MyBookings">
              <UserProfile />
            </Route>
            <Route path="/vendor/:id">
              <VendorCheck setMessage={setMessage} setOpenAlert={setOpenAlert} setColor={setColor}/>
            </Route>
            <Route path="/luggage-storage/:city">
              <LuggageStorage setMessage={setMessage} setOpenAlert={setOpenAlert} setColor={setColor}/>
            </Route>
            <Route path="/payment">
              <PaymentPage setMessage={setMessage} setOpenAlert={setOpenAlert} setColor={setColor}/>
            </Route>
            <Route path="/booking/:id">
              <PaymentComplete />
            </Route>
          </Switch>
        }

       
        <div>
        <FooterColour>BY TEAM GO ALL RIGHT RESERVED 2020</FooterColour>
        </div>
      </div>
    </User.Provider>  
  );
}

export default App;
