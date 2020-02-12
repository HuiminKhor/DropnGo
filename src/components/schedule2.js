import React, { useState } from "react";
import { DateTimePicker,MuiPickersUtilsProvider, } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

function BasicDateTimePicker() {
  const [dropOffDate, setDropOffDate] = useState(new Date());
  const [pickUpDate, setPickUpDate] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
            <p></p>
            <DateTimePicker 
                label="Drop Off"
                inputVariant="outlined"
                value={dropOffDate}
                onChange={setDropOffDate}
            />
            
            <p></p>

            <DateTimePicker 
                label="Pickup"
                inputVariant="outlined"
                value={pickUpDate}
                onChange={setPickUpDate}
            />
            <p></p>
            <Typography className='numberText'>
             Luggage
            </Typography>
            <TextField className='numberfield'
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
        />
        </Grid>    
    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;
