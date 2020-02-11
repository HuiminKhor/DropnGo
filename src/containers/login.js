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
import Axios from 'axios'


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
  // let history = useHistory()

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
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
  const handleLogin = e => {
    e.preventDefault()
    Axios.post('https://dropandgo.herokuapp.com/api/v1/users/1', {
      password: password,
      email: email
    })
      .then(result => {
        console.log(result.data)
        console.log('Login success')
        // const { auth_token, status, user } = result.data
        // if (status === 'success') {
        //   setCurrentUser({
        //     jwt: auth_token,
        //     user
        //   })
        //   localStorage.setItem('jwt', auth_token) // store jwt
        //   handleClose()
        //   toast('You are logged in!')
        //   history.push(`/me`)
        // }
      })
      .catch(err => {
        console.error(err)
        // if (err.response && err.response.data.status === 'fail') {
        //   toast('Invalid login credentials')
        // } else {
        //   toast(
        //     'Something went wrong. Please try again later, or contact our customer service.'
        //   )
        // }
        // setLoading(false)
      })
  }
  return (
    <div>
      <h1>{loginInfo.email}</h1>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Login
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form className={classes.root} noValidate autoComplete="off">
      <div className='loginForm'>
          
        <TextField
          name="email"
          id="outlined-textarea"
          label="Email Address"
          placeholder="Example@email.com"
          multiline
          variant="outlined"
          value={email}
          onChange={handleInput}
        />
        <TextField
          name="password"
          id="outlined-textarea"
          label="Password"
          placeholder="Password required"
          multiline
          variant="outlined"
          value={password}
          onChange={handleInput}
        />
        <Button onSubmit={handleLogin} variant="contained" color="primary" style={{ paddingLeft:"76px", paddingRight:"76px" , margin:"10px" }}>
        LOG IN
        </Button>
        <h5>Already Have An Account? Login!</h5>
      </div>
    </form>  
      </Dialog>
    </div>
  );
}
export default FullScreenDialog