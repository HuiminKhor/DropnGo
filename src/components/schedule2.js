import React, { useState, useEffect } from "react";
import { DateTimePicker, MuiPickersUtilsProvider, } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';


function BasicDateTimePicker({
    setDropOffDate,
    setPickUpDate,
    setLuggageNum,
    dropOffDate,
    pickUpDate,
    luggageNum
}) {

    const handleInput = (e) => {
        setLuggageNum(e.target.value)
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around" className="booking-column">
                <br/>
                <DateTimePicker className="dropoff-column"
                    label="Drop Off"
                    inputVariant="outlined"
                    value={dropOffDate}
                    onChange={setDropOffDate}
                />

                <br/>

                <DateTimePicker className="pickup-column"
                    label="Pickup"
                    inputVariant="outlined"
                    value={pickUpDate}
                    onChange={setPickUpDate}
                />
                <br/>
            </Grid>
            <Grid container justify="space-around">
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
