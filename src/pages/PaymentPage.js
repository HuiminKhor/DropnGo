import React, { useState, useEffect } from 'react';
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import Moment from 'react-moment';

function PaymentPage() {
    let instance;
    let { state } = useLocation()

    // if you do history.push('/payment', {a: 1, b: 2})
    // then state will be {a:1, b:2}
    console.log(state)

    const [clientToken, setClientToken] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/payments/new')
        // axios.get('https://dropandgo.herokuapp.com/api/v1/bookings/')
            .then(result => {
                setClientToken(result.data.client_token)
            })
    }, [])

    const buy = () => {
        instance.requestPaymentMethod()
            .then(result => {
                console.log(result)
                axios({
                    url: `http://localhost:5000/api/v1/payments/pay`,
                    method: 'post',
                    data: {
                        amount: state.cost,
                        start: state.dropOffDate,
                        end: state.pickUpDate,
                        luggage_num: state.luggageNum,
                        nonce: result.nonce
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
