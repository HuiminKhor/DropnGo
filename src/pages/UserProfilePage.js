import React, {useState, useEffect} from 'react'
import { Card, Button, CardHeader, CardBody } from 'reactstrap';
import Qrgen from '../components/qrModal'
import axios from 'axios'
import '../App.css'
import { User } from '../App'
import moment from 'moment'



// const liStyle = {
//     display: "flex",
//     listStyleType: "none"
// }

// const liStyle2 = {
//     display:"flex",
//     marginLeft:"20px"

// }

const btnStyle = {
    display:"flex"
}

const btnStyle2 = {
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

// a = [1, 2, 3]
// a.map(item => {
//     return <p>{item}</p>
// })


const UserProfile = () => {
    const { currentUser } = React.useContext(User)
    // console.log(currentUser)
    const [modal, setModal] = useState(false);
    const [id, setId] = useState(null);
    const toggle = (id) =>{
        setId(id)
        setModal(!modal)
    } 
    const closeModal =()=>{
        setId(null)
        setModal(!modal)
    }
    const [mode, setMode] = useState(true)
    const toggleMode = () => {setMode(true)}
    const toggleMode2 = () => {setMode(false)}

    // const [mode2, setMode2] = useState(false)

    const [booking, setBooking] = useState([])
    const [booking2, setBooking2] = useState([])
    // const [store, setStore] = useState({})


    useEffect(() => {
        // axios.get(`http://localhost:5000/api/v1/bookings/?user_id=2`)
        axios.get(`https://dropandgo.herokuapp.com/api/v1/bookings?user_id=${currentUser.id}`)

            .then(result => {
                // console.log(result)
                let booking = result.data.filter( (book=> (book.status!==3) ) )
                setBooking(booking)
                let booking2 = result.data.filter( (book=> (book.status===3)))
                setBooking2(booking2)
                // setStore(result.data.store)
            })
    
    }, [currentUser])

    // console.log('booking is ', booking)

    // let { id } = useParams()

    return(
        <div>
            <div style={{textAlign:"center"}}>
                <h2 className="profileBookingTitle">My Bookings</h2>
            </div>
            <div>
                <div>
                    <button onClick={toggleMode}>
                        Booking List
                    </button>
                </div>
                <div>
                    <button onClick={toggleMode2}>
                        Completed bookings
                    </button>
                </div>
            </div>
            {
                mode ?
                <>
                    {
                        id ? <Qrgen modal={modal} toggle={closeModal} booking_id={id}/> :
                        <>
                    { booking.map((book=>(
                        <div>
                        <Card style={{border:"1px solid #40739E", marginRight:"5vw", marginLeft:"5vw", paddingBottom:"20px", borderRadius:"10px", marginTop:"10px"}}>
                            <CardHeader style={{fontWeight:"bold", textAlign:"center", fontSize:"2rem"}}>Luggage Station at KL Sentral</CardHeader>
                            <CardBody style={{display: "flex", justifyContent: "center"}}>
                                <div  style={btnStyle}>
                                        <div scope="row">
                                            <div className="leftVariable">Drop off</div>
                                            <div className="leftVariable">Pick up</div>
                                            <div className="leftVariable">Luggage</div>
                                            <div className="leftVariable">Price</div>
                                            <div className="leftVariable">Address</div>
                                            <div className="leftVariable">Operating hours</div>
                                            <div className="leftVariable">Status</div>
        
                                        </div>
                                        <div scope="row" style={btnStyle2}>
                                            <div className="rightVariable">{moment(book.check_in_date_time).format('llll')}</div>
                                            <div className="rightVariable">{moment(book.check_out_date_time).format('llll')}</div>
                                            <div className="rightVariable">{book.number_of_bag}</div>
                                            <div className="rightVariable">{book.price}</div>
                                            <div className="rightVariable">{book.store.area}</div>
                                            <div className="rightVariable">{book.store.opening_hours}</div>
                                            <div className="rightVariable">{book.status===1 ? "Not Check in" : "Checked in "}</div>
        
                                        </div>                 
                                </div>                           
                            </CardBody>
                            <div style={{textAlign:"center", marginTop:"20px"}}>
                                <Button style={{textAlign:"center", color:"#fff", background:"#40739E", border:"1px solid #40739E", width: "140px", fontWeight:"bold", fontSize:"1.5rem"}} onClick={()=>toggle(book.id)} >View Qr Code</Button>
                            </div>
                        </Card>
                    </div>
                     ))) 
                    }
                    </>
                }
                </>
                :<>
                {
                    id ? <Qrgen modal={modal} toggle={closeModal} booking_id={id}/> :
                    <>
                { booking2.map((book=>(
                    <div>
                    <Card style={{border:"1px solid #40739E", marginRight:"5vw", marginLeft:"5vw", paddingBottom:"20px", borderRadius:"10px", marginTop:"10px"}}>
                        <CardHeader style={{fontWeight:"bold", textAlign:"center", fontSize:"2rem"}}>Luggage Station at KL Sentral</CardHeader>
                        <CardBody style={{display: "flex", justifyContent: "center"}}>
                            <div  style={btnStyle}>
                                    <div scope="row">
                                        <div className="leftVariable">Drop off</div>
                                        <div className="leftVariable">Pick up</div>
                                        <div className="leftVariable">Luggage</div>
                                        <div className="leftVariable">Price</div>
                                        <div className="leftVariable">Address</div>
                                        <div className="leftVariable">Operating hours</div>
                                        <div className="leftVariable">Status</div>
    
                                    </div>
                                    <div scope="row" style={btnStyle2}>
                                        <div className="rightVariable">{moment(book.check_in_date_time).format('llll')}</div>
                                        <div className="rightVariable">{moment(book.check_out_date_time).format('llll')}</div>
                                        <div className="rightVariable">{book.number_of_bag}</div>
                                        <div className="rightVariable">{book.price}</div>
                                        <div className="rightVariable">{book.store.area}</div>
                                        <div className="rightVariable">{book.store.opening_hours}</div>
                                        <div className="rightVariable">{book.status===3 ? "Check out complete":null}</div>
    
                                    </div>                 
                            </div>                           
                        </CardBody>
                        <div style={{textAlign:"center", marginTop:"20px"}}>
                            <Button style={{textAlign:"center", color:"#fff", background:"#40739E", border:"1px solid #40739E", width: "140px", fontWeight:"bold", fontSize:"1.5rem"}} onClick={()=>toggle(book.id)} >View Qr Code</Button>
                        </div>
                    </Card>
                </div>
                 ))) 
                }
                </>
            }
            </>
            }

            {/* {
                mode2 ?
                
                :null
            } */}
            
        </div>
        
    )
}
export default UserProfile