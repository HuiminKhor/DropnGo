import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Booking = () => {
    const history = useHistory()

    const formStyle = {
        display: "flex",
        flexDirection: 'column'
    }

    const [userInfo, setUserinfo] = useState({
        name: "",
        email: "",
        time: "",
        duration: ""
    })

    const { name, email, time, duration } = userInfo

    const handleInput = e => {
        const { name, value } = e.target
        setUserinfo({
            ...userInfo,
            [name]: value
        })

    }




    const handleSubmit = e => {
        e.preventDefault()
        //need to do axios post to the booking database
        history.push('/qr', {
            ...userInfo
        })
    }

    return (
        <div>
            <p>FILL IN YOUR BOOKING DETAILS BELOW!!!</p>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input
                    className="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleInput} />

                <input
                    className="email"
                    name="email"
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={handleInput} />

                <input
                    className="time"
                    name="time"
                    type="text"
                    placeholder="Time"
                    value={time}
                    onChange={handleInput} />

                <input
                    className="duration"
                    name="duration"
                    type="text"
                    placeholder="Duration"
                    value={duration}
                    onChange={handleInput} />

                <input
                    classname="btn"
                    type="submit"
                    value={"Submit"} />

            </form>
        </div>

    )
}

export default Booking