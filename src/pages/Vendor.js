import React,{useState, useEffect} from 'react'
import { Card, Button, CardHeader, CardBody } from 'reactstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css'
import moment from "moment";


const btnStyle = {
    display:"flex"
}

const btnStyle2 = {
    marginLeft:"20px"
}

const VendorCheck = ({ setMessage, setOpenAlert, setColor }) => {
    // const { currentUser } = React.useContext(User)

    let { id } = useParams()

    const [check, setCheck] = useState(false);
    const [booking, setBooking] = useState([])

    // const toggle = () =>{setcheck(!check)}

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
            setCheck(!check)
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
        })
    }
    

    useEffect(() => {
        // axios.get(`http://localhost:5000/api/v1/bookings/?user_id=2`)
        axios.get(`https://dropandgo.herokuapp.com/api/v1/bookings?book_id=${id}`)

            .then(result => {
                console.log(result)
                setBooking(result.data)
                // setStore(result.data.store)
            })
    
    }, [id])

    // console.log(booking[0])

    return (
        <div>
            <div style={{textAlign:"center"}}>
                <h2 className="profileBookingTitle">Booking Request</h2>
            </div>
            <div>
                <Card style={{border:"1px solid #40739E", marginRight:"5vw", marginLeft:"5vw", paddingBottom:"20px", borderRadius:"10px", marginTop:"10px"}}>
                    <CardHeader style={{fontWeight:"bold", textAlign:"center", fontSize:"2rem"}}>Luggage at KL Sentral</CardHeader>

                    <CardBody>
                        {
                            booking[0] ?
                            <div className="product">
                                <p><strong>Name:</strong> {booking[0].user.name}</p>
                                <p><strong>Booking id:</strong> {booking[0].id}</p>
                                <p><strong>Drop Off:</strong> {moment(booking[0].check_in_date_time).format('llll')}</p>
                                <p><strong>Pick Up:</strong> {moment(booking[0].check_out_date_time).format('llll')}</p>
                                <p><strong>Luggage:</strong> {booking[0].number_of_bag}</p>
                                <p><strong>Status:</strong> {booking[0].status}</p>
                                <p><strong>Price:</strong> RM{booking[0].price}</p>
                                <p><strong>Address:</strong> {booking[0].store.area}</p>
                                <p><strong>Operating Hours:</strong> {booking[0].store.opening_hours}</p>
                            
                            </div>:
                            null

                        }

                    </CardBody>




                    <div style={{textAlign:"center", marginTop:"20px"}}>
                        
                            {
                                check ? 
                                <Button style={{textAlign:"center", color:"#fff", background:"#40739E", border:"1px solid #40739E", width: "140px", fontWeight:"bold", fontSize:"1.5rem"}} onClick={checkOut} >Check Out</Button> :
                                <Button style={{textAlign:"center", color:"#fff", background:"#40739E", border:"1px solid #40739E", width: "140px", fontWeight:"bold", fontSize:"1.5rem"}} onClick={checkIn} >Check In</Button>
                            }
                        
                    </div>
                    {/* <CardFooter style={{textAlign:"center"}}>Footer</CardFooter> */}
                </Card>
        </div>
        </div>
    )
}

export default VendorCheck
