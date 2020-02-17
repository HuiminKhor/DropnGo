import React,{useState, useEffect} from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../App.css'
import moment from "moment"
import LoadingIndicator from '../components/LoadingIndicator'
import BOOKINGSTATUSES from '../constants/BookingStatuses'


const VendorCheck = ({ setMessage, setOpenAlert, setColor }) => {
    // const { currentUser } = React.useContext(User)

    let { id } = useParams()

    const [status, setStatus] = useState(3)
    const [isLoading, setIsLoading] = useState(true)
    const [booking, setBooking] = useState({
            id: "", 
            store: {
                area: "",
                opening_hours: ""
                },
            user: {
                name: ""
            },
            check_in_date_time: "",
            check_out_date_time: "",
            number_of_bag: "",
            price: ""
    })

    const { store: {
                area,
                opening_hours
                },
            user: {
                name
            },
            check_in_date_time,
            check_out_date_time,
            number_of_bag,
            price 
            } = booking


    const checkIn = () => {
        // to handle check in
        axios({
            url: `http://dropandgo.herokuapp.com/api/v1/bookings/${id}/update/?status=2`,
            method: 'get',
        })
        .then(result =>{
            setMessage("Luggage has been checked in!")
            setOpenAlert(true)
            setColor("success")
            setStatus(2)
        })
        .catch(error => {
            console.log(error.response.data)
            setIsLoading(false)
        })
    }

    const checkOut = () => {
        axios({
            url: `http://dropandgo.herokuapp.com/api/v1/bookings/${id}/update/?status=3`,
            method: 'get',
        })
        .then(result =>{
            setMessage("This job is complete!")
            setOpenAlert(true)
            setColor("info")
            setStatus(3)
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }
    

    useEffect(() => {
        // axios.get(`http://localhost:5000/api/v1/bookings/?user_id=2`)
        axios.get(`https://dropandgo.herokuapp.com/api/v1/bookings?book_id=${id}`)

            .then(result => {
                console.log(result.data[0])
                setBooking(result.data[0])
                setStatus(result.data[0].status)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }, [id])

    let button;

    if (status === 2) {
        button = <Button style={{cursor: "pointer", textAlign:"center", color:"#fff", background:"#40739E", border:"1px solid #40739E", width: "140px", fontWeight:"bold", fontSize:"1.5rem"}} onClick={checkOut}>Check Out</Button>
    } else if (status === 1) {
        button = <Button style={{cursor: "pointer", textAlign:"center", color:"#fff", background:"#40739E", border:"1px solid #40739E", width: "140px", fontWeight:"bold", fontSize:"1.5rem"}} onClick={checkIn} >Check In</Button>
    }

    const getStatus = (booking) => {
        return BOOKINGSTATUSES.find (s => s.value === booking)
    }

    return (
        <div>
            { isLoading ? 
              <LoadingIndicator  /> :
            <>
            <div style={{textAlign:"center"}}>
                <h2 className="profileBookingTitle">Booking Request</h2>
            </div>
            <div>
            { booking.id !== "" ?
                <Card style={{border:"1px solid #40739E", marginRight:"5vw", marginLeft:"5vw", paddingBottom:"20px", borderRadius:"10px", marginTop:"10px"}}>
                
                 
                    <CardHeader style={{fontWeight:"bold", textAlign:"center", fontSize:"2rem"}}>Luggage at {area}</CardHeader>

                    <CardBody>
                        
                            <div className="product">
                                <p style={{backgroundColor: getStatus(status).colour, borderRadius: "10%", fontSize: "3.0em", marginLeft: "auto", marginRight: "auto"}}><strong>{getStatus(status).status}</strong></p>
                                <p><strong>Name:</strong> {name}</p>
                                <p><strong>Booking id:</strong> {booking.id}</p>
                                <p><strong>Drop Off:</strong> {moment(check_in_date_time).format('llll')}</p>
                                <p><strong>Pick Up:</strong> {moment(check_out_date_time).format('llll')}</p>
                                <p><strong>Luggage:</strong> {number_of_bag}</p>
                                {/* <p style={{backgroundColor: getStatus(status).colour}}><strong>Status:</strong> {getStatus(status).status}</p> */}
                                <p><strong>Price:</strong> RM{price}</p>
                                <p><strong>Address:</strong> {area}</p>
                                <p><strong>Operating Hours:</strong> {opening_hours}</p>
                            
                            </div>
             
                    </CardBody>
  
                    <div style={{textAlign:"center", marginTop:"20px"}}>
                        
                    {button}
                        
                    </div>
                    {/* <CardFooter style={{textAlign:"center"}}>Footer</CardFooter> */}
                </Card>
                :
                null }
            </div>
            </>
    }</div>
    )
}

export default VendorCheck
