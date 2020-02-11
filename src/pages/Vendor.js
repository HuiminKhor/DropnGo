import React,{useState} from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

const btnStyle = {
    display:"flex"
}

const btnStyle2 = {
    marginLeft:"20px"
}

const VendorCheck = () => {
    const [check, setcheck] = useState(false);

    const toggle = () => setcheck(!check);
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <p>Booking Request</p>
            </div>
            {/* <div style={{display:"flex", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
                <div style={btnStyle}>
                    <div >
                        <button>
                            Bookings
                        </button>
                    </div>
                    <div style={btnStyle2}>
                        <button>
                            Upcoming Bookings
                        </button>
                    </div>
                </div>
            </div> */}
            
            <div>
                <Card style={{border:"5px solid black", marginRight:"10vw", marginLeft:"10vw", paddingTop:"20px", paddingBottom:"20px", borderRadius:"25px"}}>
                    <CardHeader style={{textAlign:"center", marginBottom: "20px"}}>Luggage at KL Sentral</CardHeader>
                    <CardBody style={{display: "flex", justifyContent: "center"}}>
                        <div  style={btnStyle}>
                                <div scope="row">
                                    <div>Booking ID</div>
                                    <div>Customer ID</div>
                                    <div>Drop Off</div>
                                    <div>Pick Up</div>
                                    <div>Luggage</div>
                                    <div>Status</div>
                                    <div>Price</div>
                                    <div>Address</div>
                                    <div>Operating hours</div>
                                </div>
                                <div scope="row" style={btnStyle2}>
                                    <div>7 axm</div>
                                    <div>8 pm</div>
                                    <div>a</div>
                                    <div>b</div>
                                    <div>c</div>
                                    <div>d</div>
                                    <div>e</div>
                                    <div>f</div>
                                    <div>g</div>
                                </div>
                                
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