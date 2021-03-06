import React, {useState, useEffect} from 'react'
import { Card, Button, CardHeader, CardBody } from 'reactstrap'
import Qrgen from '../components/qrModal'
import axios from 'axios'
import '../App.css'
import { User } from '../App'
import moment from 'moment'
import LoadingIndicator from '../components/LoadingIndicator'
import BOOKINGSTATUSES from '../constants/BookingStatuses'


const UserProfile = () => {
    const { currentUser} = React.useContext(User)
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
    const [Loading, setLoading] = useState(true)

    const [bookError, setBookError] = useState("")


    useEffect(() => {
        // axios.get(`http://localhost:5000/api/v1/bookings/?user_id=2`)
        axios.get(`https://dropandgo.herokuapp.com/api/v1/bookings?user_id=${currentUser.id}`)

            .then(result => {
                console.log(result)
                let booking = result.data.filter( (book=> (book.status!==3) ) )  
                setBooking(booking)
                let booking2 = result.data.filter( (book=> (book.status===3)))
                setBooking2(booking2)
                setLoading(false)
            })
            .catch(error => {
                setBookError(error.response.data.is_success)
                setBooking([])
                setBooking2([])
                setLoading(false)
                // do something to deal with or show the error
            })
    
    }, [currentUser])

    // console.log('booking is ', booking)

    // let { id } = useParams()

    const getStatus = (booking) => {
        return BOOKINGSTATUSES.find (s => s.value === booking)
    }


    return(
        <div>
            <div style={{textAlign:"center"}}>
                <h2 className="profileBookingTitle">MY BOOKINGS</h2>
            </div>
            <div className="BookedButtonList">
                <div>
                    <button className="BookingListButton" style={mode?{background:"#40739E",color: "white"}:null}  onClick={toggleMode}>
                        CURRENT
                    </button>
                </div>
                <div>
                    <button className="CompletedListButton" style={mode?null:{background:"#40739E",color: "white"}} onClick={toggleMode2}>
                        COMPLETED
                    </button>
                </div>
            </div>
            
            { Loading ? 
              <LoadingIndicator  /> :  
            <>
            { booking.length !== 0 || booking2.length !== 0 ?
            <>
                
            {
                mode ?
                <>
                
                    {
                        id ? <Qrgen modal={modal} toggle={closeModal} booking_id={id}/> :
                        <>
                    { booking.map((book=>(
                        <div key={book.id}>
                        <Card style={{border:"1px solid #40739E", marginRight:"5vw", marginLeft:"5vw", paddingBottom:"20px", borderRadius:"10px", marginTop:"10px"}}>
                            <CardHeader style={{fontWeight:"bold", textAlign:"center", fontSize:"2rem"}}>Luggage Station at {book.store.area}</CardHeader>
 
                            <CardBody>
                                    <div className="product">
                                        <p style={{backgroundColor: getStatus(book.status).colour, fontSize: "3.0em", color:"white", justifyContent:"center", textTransform:"uppercase"}}><strong style={{marginBottom:"10px"}}>{getStatus(book.status).status}</strong></p>
                                        <p><strong>Booking ID:</strong> {book.id}</p>
                                        <p><strong>Store Name:</strong> {book.store.name}</p>
                                        <p><strong>Street:</strong> {book.store.building_number},{book.store.street_name}</p>
                                        <p><strong>City:</strong>{book.store.city}</p>
                                        <p><strong>Drop Off:</strong> {moment(book.check_in_date_time).format('llll')}</p>
                                        <p><strong>Pick Up:</strong> {moment(book.check_out_date_time).format('llll')}</p>
                                        <p><strong>Luggage:</strong> {book.number_of_bag}</p>
                                        <p><strong>Price:</strong> RM{book.price}</p>
                                        <p><strong>Operating Hours:</strong> {book.store.opening_hours}</p>
                                    </div>
                            </CardBody>

                            <div style={{textAlign:"center", marginTop:"20px"}}>
                                <Button style={{textAlign:"center", color:"#fff", background:"#40739E", border:"1px solid #40739E", width: "140px", fontWeight:"bold", fontSize:"1.5rem"}} onClick={()=>toggle(book.id)} >View QR Code</Button>
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
                    <div key={book.id}>
                        <Card style={{border:"1px solid #40739E", marginRight:"5vw", marginLeft:"5vw", paddingBottom:"20px", borderRadius:"10px", marginTop:"10px"}}>
                            <CardHeader style={{fontWeight:"bold", textAlign:"center", fontSize:"2rem"}}>Luggage Station at {book.store.area}</CardHeader>
                                <CardBody>
                                    <div className="product">
                                        <p style={{backgroundColor: getStatus(book.status).colour, fontSize: "3.0em", color:"white", justifyContent:"center", textTransform:"uppercase"}}><strong style={{marginBottom:"10px"}}>{getStatus(book.status).status}</strong></p>
                                        <p><strong>Booking ID:</strong> {book.id}</p>
                                        <p><strong>Store Name:</strong> {book.store.name}</p>
                                        <p><strong>Street:</strong> {book.store.building_number},{book.store.street_name}</p>
                                        <p><strong>City:</strong>{book.store.city}</p>
                                        <p><strong>Drop Off:</strong> {moment(book.check_in_date_time).format('llll')}</p>
                                        <p><strong>Pick Up:</strong> {moment(book.check_out_date_time).format('llll')}</p>
                                        <p><strong>Luggage:</strong> {book.number_of_bag}</p>
                                        <p><strong>Price:</strong> {book.price}</p>
                                        <p><strong>Operating Hours:</strong> {book.store.opening_hours}</p>
                                    </div>
                                </CardBody>
                                <div style={{textAlign:"center", marginTop:"20px"}}>
                            {/* <Button style={{textAlign:"center", color:"#fff", background:"#40739E", border:"1px solid #40739E", width: "140px", fontWeight:"bold", fontSize:"1.5rem"}} onClick={()=>toggle(book.id)} >View QR Code</Button> */}
                            </div>
                        </Card>
                    </div>
                 ))) 
                }
                </>
            }
            </>
            }
            </>
            
            :
            <div className="ErrorNoBooking">{!bookError ? "Sorry, there are no bookings yet." : null }</div>
            
        }
        </>
    }

        </div>
        
    )
}
export default UserProfile