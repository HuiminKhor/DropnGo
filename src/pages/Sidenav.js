import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import HouseIcon from '@material-ui/icons/House';
import '../App.css'
import { User } from '../App'
import profileImage from './profileImage.jpeg'
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function SideNav() {

  const { currentUser, loggedIn, handleLogout, handleFsdOpen } = React.useContext(User)


  const classes = useStyles();
  const [state, setState] = useState({right: false,});
  


  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      
      {loggedIn===false ?
      <div>      
        <Link to="/">
        <Button className="sideBarRedesign" to="/">Home</Button>
        </Link>
            <br/>

                 <Button className="sideBarRedesign" color="primary" onClick={handleFsdOpen}>Login</Button>

      </div>
      :
        <div>
          <div className="sideBarWhole">
          <div className="row">
            <div className="col sideBarProfileImage">
              <img className="profileImageT" src={currentUser.image_filename} width="50px" height="50px" border-radius="10px"></img>


            </div>

            <div className="col sideBarProfileText">

              <p className="sideBarProfileP">{currentUser.name}</p>
      <p className="sideBarProfileP">{currentUser.email}</p>
              
            </div>


          </div>
             
            </div>
          <div>
          <Link to="/">
          <Button className="sideBarRedesign" >Home</Button>
          </Link>
            <br/>
            <Button className="sideBarRedesign">Accounts</Button>
            <br/>
            <Button  disabled className="sideBarSmaller">My Account</Button>
            <br/>
            <Link to="/profile">
            <Button disabled className="sideBarSmaller">My Luggage Storage</Button>
            </Link>
          </div>
          <Divider/>
          <Button className="sideBarButtonRedesign" color="secondary" onClick={handleLogout}>Logout</Button>
        </div>
      }

    </div>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer('right', true)} />
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default SideNav;