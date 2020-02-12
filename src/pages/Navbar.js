import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Logo from '../Group 529.png'
import SideNav from './Sidenav'
import FullScreenDialog from '../containers/login'
import axios from 'axios'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  const [loggedIn, setLoggedIn] = useState(false) // Logged in state
  const [currentUser, setCurrentUser] = useState({}) // current user

  const handleLogin = (e) => {
    e.preventDefault()
    axios({
      method: 'GET',
      url: `https://dropandgo.herokuapp.com/api/v1/users/1`
    })
    .then(response => {
        console.log(response.data)
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
    
  const handleLogout = () => setLoggedIn(false)


  const [openFsd, setOpenFsd] = useState(false); // state for the FullScreenDialog (Fsd)

  const handleFsdOpen = () => {
    setOpenFsd(true);
  };

  const handleFsdClose = () => {
    setOpenFsd(false);
  };


  return (
    <div className={classes.root}>
      <AppBar className="color-appbar" position="static">
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            <img src={Logo} alt="logo" className='main-logo'/>
          </Typography>
          <FullScreenDialog handleFsdClose={handleFsdClose} open={openFsd} handleLogin={handleLogin}/>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" id='dropdown'>
            <SideNav handleFsdOpen={handleFsdOpen} handleLogout={handleLogout} loggedIn={loggedIn}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar