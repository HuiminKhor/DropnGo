import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import HouseIcon from '@material-ui/icons/House';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function SideNav({handleFsdOpen, handleLogout, loggedIn}) {
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
      <Button color="primary" className="hometext">Home</Button>
      <br/>
      <Divider />
      {loggedIn===false ?
        <Button color="primary" onClick={handleFsdOpen}>Login</Button>
      :
        <div>
          <div>
            <Button color="primary">Accounts</Button>
            <br/>
            <Button disabled>My Account</Button>
            <br/>
            <Button disabled>My Luggage Storage</Button>
          </div>
          <Divider/>
          <Button color="secondary" onClick={handleLogout}>Logout</Button>
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