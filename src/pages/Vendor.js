import React,{useState, useEffect} from 'react'
import { Card, Button, CardHeader, CardBody } from 'reactstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const btnStyle = {
    display:"flex"
}

const btnStyle2 = {
    marginLeft:"20px"
}

const VendorCheck = () => {
    // const { currentUser } = React.useContext(User)

    let { id } = useParams()

    const [check, setcheck] = useState(false);
    const [booking, setBooking] = useState([])


    const toggle = () => setcheck(!check);

    useEffect(() => {
        // axios.get(`http://localhost:5000/api/v1/bookings/?user_id=2`)
        axios.get(`https://dropandgo.herokuapp.com/api/v1/bookings?book_id=${id}`)

            .then(result => {
                // console.log(result)
                setBooking(result.data)
                // setStore(result.data.store)
            })
    
    }, [id])

    console.log(booking[0])

    return (
        <div>
            <div style={{textAlign:"center"}}>
                <p>Booking Request</p>
            </div>
            <div>
                <Card style={{border:"5px solid black", marginRight:"10vw", marginLeft:"10vw", paddingTop:"20px", paddingBottom:"20px", borderRadius:"25px"}}>
                    <CardHeader style={{textAlign:"center", marginBottom: "20px"}}>Luggage at KL Sentral</CardHeader>
                    <CardBody style={{display: "flex", justifyContent: "center"}}>
                        <div  style={btnStyle}>
                        <div scope="row">
                                    <div>Drop off</div>
                                    <div>Pick up</div>
                                    <div>Luggage</div>
                                    <div>Status</div>
                                    <div>Price</div>
                                    <div>Address</div>
                                    <div>Operating hours</div>
                                </div>

                                {
                                    booking[0] ?
                                    <div scope="row" style={btnStyle2}>
                                    <div>{booking[0].check_in_date_time}</div>
                                    <div>{booking[0].check_out_date_time}</div>
                                    <div>{booking[0].number_of_bag}</div>
                                    <div>{booking[0].status}</div>
                                    <div>{booking[0].price}</div>
                                    <div>{booking[0].store.area}</div>
                                    <div>{booking[0].store.opening_hours}</div>
                                    </div> :
                                    null
                                }
                                {/*<div scope="row" style={btnStyle2}>
                                    <div>{booking[0].check_in_date_time}</div>
                                    <div>{booking[0].check_out_date_time}</div>
                                    <div>{booking[0].number_of_bag}</div>
                                    <div>{booking[0].status}</div>
                                    <div>{booking[0].price}</div>
                                    <div>{booking[0].store.area}</div>
                                    <div>{booking[0].store.opening_hours}</div>
                                </div>*/}
                                
                            </div>
                            
                    </CardBody>
                    <div style={{textAlign:"center", marginTop:"20px"}}>
                        <Button onClick={toggle} >
                            {
                                check ? 
                                "Check Out" :
                                "Check In"
                            }
                        </Button>
                    </div>
                    {/* <CardFooter style={{textAlign:"center"}}>Footer</CardFooter> */}
                </Card>
        </div>
        </div>
    )
}

export default VendorCheck