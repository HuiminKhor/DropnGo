import React,{useState, useEffect} from 'react'
import { Table } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import Qrgen from '../components/qrModal'
import axios from 'axios'

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
                <p>My Bookings</p>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
                <div style={btnStyle}>
                    <div>
                        <button onClick={() => setMode(true)}>
                            Booking
                        </button>                      
                    </div>
                    <div style={btnStyle2}>
                        <button onClick={() => setMode(false)}>
                            Upcoming Bookings
                        </button>
                    </div>
                </div>
            </div>
            { mode? 
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
                                <div scope="row" style={btnStyle2}>
                                    <div>7 axm</div>
                                    <div>8 pm</div>
                                    <div>a</div>
                                    <div>b</div>
                                    <div>c</div>
                                    <div>d</div>
                                    <div>e</div>
                                </div>
                                
                            </div>
                            
                    </CardBody>
                    <div style={{textAlign:"center", marginTop:"20px"}}>
                        <Button onClick={toggle} >Go to Qr Code</Button>
                    </div>
                    {/* <CardFooter style={{textAlign:"center"}}>Footer</CardFooter> */}
                </Card>
            </div> : <div>"anything here???</div>
        }
        </div>
        
    )
}
export default UserProfile