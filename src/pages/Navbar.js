import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../Group 529.png'
import TemporaryDrawer from './Sidenav';
import FullScreenDialog from '../containers/login';


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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            <img src={Logo} alt="logo" className='main-logo'/>
          </Typography>
          <FullScreenDialog/>
          {/* <Button color="inherit">Login</Button> */}
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" id='dropdown'>
            <TemporaryDrawer/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
