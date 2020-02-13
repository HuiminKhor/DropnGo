import React, { useState } from 'react'
// import { toast } from 'react-toastify'
// import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { User } from '../App'


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog() {

  const { handleFsdClose, openFsd, handleLogin } = React.useContext(User)
  const classes = useStyles();

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const { email, password } = loginInfo

  const handleInput = e => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    })
    console.log(loginInfo)
  }
  
  return (
    <div>
      <Dialog fullScreen open={openFsd} onClose={handleFsdClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} className="LoginHeader">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleFsdClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Login 
            </Typography>
          </Toolbar>
        </AppBar>
        <form className={classes.root} noValidate autoComplete="off">
          <div className='loginForm'>

            <TextField
              name="email"
              id="email"
              label="Email Address"
              placeholder="Example@email.com"
              multiline
              variant="outlined"
              value={email}
              onChange={handleInput}
            />
            <TextField
              name="password"
              id="password"
              label="Password"
              placeholder="Password required"
              multiline
              variant="outlined"
              value={password}
              onChange={handleInput}
            />
            <Button className="LoginInsideButton" onClick={handleLogin} variant="contained" style={{ paddingLeft: "76px", paddingRight: "76px", margin: "10px"}}>
              LOG IN
        </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
export default FullScreenDialog