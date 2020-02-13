import React,{useState, useEffect} from 'react'
import { Table } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import Qrgen from '../components/qrModal'
import axios from 'axios'
import '../App.css'


const liStyle = {
    display: "flex",
    listStyleType: "none"
}

const btnStyle = {
    display:"flex"
}

const btnStyle2 = {
    marginLeft:"20px"
}

const liStyle2 = {
    display:"flex",
    marginLeft:"20px"

}

// state = {
//     booking: null
// };


// const book = () => {
//     axios.get('http://localhost:5000/api/v1/bookings/new')
//             .then(result => {
//                 console.log(result)
//                 this.setState({
//                     booking: result.data
//                 })
//             })
        
// }

// book()


const UserProfile = (id) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [mode, setMode] = useState(true)

    const [booking, setBooking] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/bookings/${'1'}`)
            .then(result => {
                console.log(result)
                this.setBooking(
                    result.data
                )
            })
    
    }, [])


    return(
        <div>
            <Qrgen modal={modal} toggle={toggle}/>
            {/* #code here for calling API to the databse so we can either use a for loop or just .map the list of bookings
            from database */}
            <div style={{textAlign:"center"}}>
                <h2 className="profileBookingTitle">My Bookings</h2>
            </div>
            {/* <div style={{display:"flex", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
                <div style={btnStyle}>
                    <div>
                        <button className="allBookingButton" onClick={() => setMode(true)}>
                            All Booking
                        </button>                      
                    </div>
                    <div style={btnStyle2}>
                        <button className="upcomingBookingButton" onClick={() => setMode(false)}>
                            Upcoming Bookings
                        </button>
                    </div>
                </div>
            </div> */}
            { mode? 
                <div>
                <Card style={{border:"1px solid #40739E", marginRight:"5vw", marginLeft:"5vw", paddingBottom:"20px", borderRadius:"10px", marginTop:"10px"}}>
                    <CardHeader style={{fontWeight:"bold", textAlign:"center", fontSize:"2rem"}}>Luggage Station at KL Sentral</CardHeader>
                    <CardBody style={{display: "flex", justifyContent: "center"}}>
                        <div  style={btnStyle}>
                                <div scope="row">
                                    <div className="leftVariable">Drop off</div>
                                    <div className="leftVariable">Pick up</div>
                                    <div className="leftVariable">Luggage</div>
                                    <div className="leftVariable">Status</div>
                                    <div className="leftVariable">Price</div>
                                    <div className="leftVariable">Address</div>
                                    <div className="leftVariable">Operating hours</div>
                                </div>
                                <div scope="row" style={btnStyle2}>
                                    <div className="rightVariable">Feb 6, 2020 17:15</div>
                                    <div className="rightVariable">8 pm</div>
                                    <div className="rightVariable">a</div>
                                    <div className="rightVariable">b</div>
                                    <div className="rightVariable">c</div>
                                    <div className="rightVariable">7 eleven, KL SENTRAL </div>
                                    <div className="rightVariable">Mon - sun, 09.15 - 22:00</div>
                                </div>
                                
                            </div>
                            
                    </CardBody>
                    <div style={{textAlign:"center", marginTop:"20px"}}>
                        <Button style={{textAlign:"center", color:"#fff", background:"#40739E", border:"1px solid #40739E", width: "140px", fontWeight:"bold", fontSize:"1.5rem"}} onClick={toggle} >View Qr Code</Button>
                    </div>
                    {/* <CardFooter style={{textAlign:"center"}}>Footer</CardFooter> */}
                </Card>
            </div> : <div>"anything here???</div>
        }
        </div>
        
    )
}
export default UserProfile