import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';


export default function MaterialUIPickers() {
    const [dropOffDate, setDropOffDate] = React.useState(new Date('2020-02-18T21:11:54'));
    const [pickUpDate, setPickUpDate] = React.useState(new Date('2020-02-18T21:11:54'));
    const [dropOffTime, setdropOffTime] = React.useState(new Date('2020-02-18T21:11:54'));
    const [pickUpTime, setpickUpTime] = React.useState(new Date('2020-02-18T21:11:54'));


    const handleDateChange = e => {
      console.log(e)
      setdropOffTime(e)
    };
    

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker className='schedule1'
            name='drop'
            margin="normal"
            id="date-picker-dialog"
            label="Drop Off Date"
            format="MM/dd/yyyy"
            value={dropOffDate}
            onChange={setDropOffDate}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
        <KeyboardTimePicker className='schedule2'
            margin="normal"
            id="time-picker"
            label="Drop Off Time"
            value={dropOffTime}
            onChange={setdropOffTime}
            KeyboardButtonProps={{
            'aria-label': 'change time',
            }}
        />
        <KeyboardDatePicker className='schedule3'
          name='pick'
          margin="normal"
          id="date-picker-dialog"
          label="Pick Up Date"
          format="MM/dd/yyyy"
          value={pickUpDate}
          onChange={setPickUpDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker className='schedule4'
            margin="normal"
            id="time-picker"
            label="Pick Up Time"
            value={pickUpTime}
            onChange={setpickUpTime}
            KeyboardButtonProps={{
            'aria-label': 'change time',
            }}
        />
        <Typography className='numberText'>
            Luggage
        </Typography>
        <TextField className='numberBag'
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            />
      </Grid>
    </MuiPickersUtilsProvider>
    
  );
}