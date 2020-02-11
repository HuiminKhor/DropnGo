import React,{useState} from 'react'
import { Table } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import Qrgen from '../components/qrModal'
// import axios from 'axios'

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



const UserProfile = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
                {/* <ul style={liStyle}>

                    <li>
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
                                <div>7 am</div>
                                <div>8 pm</div>
                                <div>a</div>
                                <div>b</div>
                                <div>c</div>
                                <div>d</div>
                                <div>e</div>
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <button>
                                View Qr Code
                            </button>
                        </div> */}
                        {/* <div>Luggage at KL Sentral</div>
                        <div style={btnStyle}>
                            <div>Drop Off</div>
                            <div style={liStyle2}>7 am</div>
                        </div>
                        <div style={btnStyle}>
                            <div>Pick Up</div>
                            <div style={liStyle2}>8 am</div>
                        </div>
                        <div>Luggage        : 3</div>
                        <div>Status         : 4</div>
                        <div>Price          : 5</div>
                        <div>Address        : 6</div>
                        <div>Operating hours: 7</div>
                        <div>    
                            <button>
                                View Qr Code
                            </button>
                        </div> */}
                    {/* </li>
                </ul> */}
            </div>
        </div>
        
    )
}
export default UserProfile