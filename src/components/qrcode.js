import React from 'react'
import { useLocation } from 'react-router-dom'
import QRCode from 'qrcode.react'

const MyQr = () => {
    // const location = useLocation()
    // const {name, email, time, duration} = location.state
    // console.log(JSON.stringify(location.state))
    // // return <QRCode value={JSON.stringify(location.state)}/>
    return <QRCode value="http://localhost:3000/vendor" size="80"/>
}

export default MyQr