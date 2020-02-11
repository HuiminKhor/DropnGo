import React, { useState, useEffect } from "react";
import { DateTimePicker,MuiPickersUtilsProvider, } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import moment from 'moment';

function BasicDateTimePicker(props) {
  const [dropOffDate, setDropOffDate] = useState(new Date());
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [luggageNum, setLuggageNum] = useState(1)

  const get_cost =()=>{
      const start = moment(dropOffDate)
      const end = moment(pickUpDate)
      const duration = moment.duration(end.diff(start))
      const hours = duration.asHours()
      
      console.log("hours:",hours)
      let round = Math.floor(hours)
      let cost;
      if (hours > round){
          cost = (round+1) * 5 * luggageNum
      }
      else{
          cost = round * 5 *luggageNum
      }
      props.setCost(cost)
      console.log("cost:",cost)
  }
  useEffect(() => {
      get_cost()
  }) 

  const handleInput=(e)=>{
      setLuggageNum(e.target.value)
  }
  

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
                value={luggageNum}
                onChange={handleInput}
        />
        </Grid>    
    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;
