import React from 'react';
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

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

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
      <HouseIcon className='homeicon' style={{ fontSize: 35 }}/>  
      <Button color="primary" className="hometext">Home</Button>
      <br/>
      <Divider />
      <div>
        <Button color="primary">Accounts</Button>
        <br/>
        <Button disabled>My Account</Button>
        <br/>
        <Button disabled>My Luggage Storage</Button>
      </div>
      <Divider/>
      <Button color="secondary">Logout</Button>
      
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