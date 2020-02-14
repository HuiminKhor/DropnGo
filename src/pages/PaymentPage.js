import React, { useState, useEffect } from 'react';
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import Moment from 'react-moment';
import { User } from '../App'


function PaymentPage() {
    
    const { currentUser } = React.useContext(User)
    let instance;
    let { state } = useLocation()

    // if you do history.push('/payment', {a: 1, b: 2})
    // then state will be {a:1, b:2}
    console.log(state)

    const [clientToken, setClientToken] = useState(null)

    useEffect(() => {
        axios.get('https://dropandgo.herokuapp.com/api/v1/payments/new')
            .then(result => {
                setClientToken(result.data.client_token)
            })
    }, [])

    const buy = () => {
        console.log(instance)
        instance.requestPaymentMethod()
            .then(result => {
                console.log(result)
                console.log(result.nonce)
                axios({
                    url: `https://dropandgo.herokuapp.com/api/v1/bookings/inc_payment`,
                    method: 'post',
                    data: {
                        "user": currentUser.id,
                        "store": state.store_id,
                        "check_in_date_time": state.dropOffDate,
                        "check_out_date_time": state.pickUpDate,
                        "number_of_bag": state.luggageNum,
                        "price": state.cost,
                        "nonce": result.nonce
                    }
                })
                    .then(response => {
                        console.log(response) // {success: true or false}
                    })
            })
    }
    
    if (!state) {
        return 'You can only access this page from booking page'
    }

    if (!clientToken) return 'Loading...'

    return (
        <div>
            <h2>Price: {state.cost}</h2>
            <h4>Start Date: <Moment>{state.dropOffDate}</Moment></h4>
            <h4>Start Date: <Moment>{state.pickUpDate}</Moment></h4>
            <h4>Number of luggage: {state.luggageNum}</h4>

            <DropIn
                options={{ authorization: clientToken }}
                onInstance={i => instance = i}
        />
            <button onClick={buy}>Buy</button>
        </div>
    )

}

export default PaymentPage
