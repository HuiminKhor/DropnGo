import React from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';



function PaymentComplete() { 

    let { state } = useLocation()
    console.log(state)
    console.log(useLocation())
   
   return  <div>


        <div className="BookingCompletedT">       
        <h1>Booking completed</h1>
        <p>Your payment of RM{state.cost} is completed</p>
        <p>Your Booking ID is: {state.booking_id}</p>
        <p>Click the button to be redirected to your booking page</p>
        <Link to="/profile" className="bookingCompletedButton">GO TO BOOKING PAGE</Link>


        </div>
        </div>


}


export default PaymentComplete
