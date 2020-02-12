import React, { useState, useEffect } from 'react';
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';



// const Payment = () => {

class Payment extends React.Component {
    instance;

    state = {
        clientToken: null
    };

    componentDidMount() {
        // Get a client token for authorization from your server
        axios.get('http://localhost:5000/api/v1/payments/new')
            .then(result => {
                console.log(result)
                this.setState({
                    clientToken: result.data.client_token
                })
            })
    }


    buy = () => {
        // Send the nonce to your server
        this.instance.requestPaymentMethod()
            .then(result => {
                console.log(result)
                axios({
                    url: `http://localhost:5000/api/v1/payments/pay`,
                    method: 'post',
                    data: {
                        
                        amount: 100,
                        nonce: result.nonce
                    }
                })
                    .then(response => {
                        console.log(response) // {success: true or false}
                    })
            })
    }

    render() {
        if (!this.state.clientToken) {
            return (
                <div>
                    <h1>Loading 123 ...</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <DropIn
                        options={{ authorization: this.state.clientToken }}
                        onInstance={instance => (this.instance = instance)}
                    />
                    <button onClick={this.buy}>Buy</button>
                </div>
            );
        }
    }
}
// const [token, setToken] = useState()

// useEffect(() => {
//     axios.get(`https://payment/new/1`)
//     .then(result => {
//         console.log(result)
//         setToken(result)
//     })
// }, [])

// return result
// }

export default Payment