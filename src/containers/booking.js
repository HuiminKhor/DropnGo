import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../App.css';

import BasicDateTimePicker from '../components/schedule2';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function BookingModal({setMessage,setOpen,setColor, price_per_hour}) {
  const [open, setOpenModal] = React.useState(false);
  const [cost, setCost] = React.useState(0)

  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleSubmit = () => {
    setMessage("Booking Confirmed")
    setOpen(true)
    setColor("success")
  };

  return (
    <div>
      <Button className="trigger-button" variant="outlined" color="primary" onClick={handleClickOpen}>
        Book Now
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className='dialogTitle'>
          Booking
        </DialogTitle>
        <DialogContent dividers>
        <BasicDateTimePicker price_per_hour={price_per_hour} setCost={ setCost }/>
        </DialogContent>
        <DialogActions>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Total:
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h4">
              { cost }
            </Typography>
          </Grid>
        </Grid>
        </DialogActions>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            BOOK NOW
          </Button>
      </Dialog>
    </div>
  );
}