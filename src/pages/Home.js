import React from 'react'
import Booking from '../components/booking'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Booking/>
            <div>
                <button>
                    <Link to={`/profile`}>
                        My profile
                    </Link>
                </button>
                
            </div>
        </div>
    )
}

export default Home