import React,{useState,useEffect} from 'react';
import { Jumbotron, Button, InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import '../App.css'
import logo from './luggage-storage-kuala-lumpur-kl-sental1139_77769.jpg'
import StarRating from '../components/StarRating.js'
import BookingModal from '../containers/booking';
import axios from "axios"


const LuggageStorage = ({setMessage , setOpen , setColor}) => {

    const [stores, setStores] = useState([])

    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://dropandgo.herokuapp.com/api/v1/stores/?loc=1`
        })
        .then(response => {
            console.log(response.data)
            setStores(response.data)
            // do something with the data returned
        })
        .catch(error => {
            console.error(error.response.data.message)
            // do something to deal with or show the error
        })
    },[])




    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="wrap">
              <div className="search">
                <input type="text" className="searchTerm" placeholder="City, Address or Location"/>
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            {
              stores.map(({ price_per_hour, operating_day, operating_hours, star_rating, city, id, nearby, nearby2, area })=>(
                <div key={id}>
            <section className="city-result">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="fast-check-in d-flex">
                  
                      <div className="angels-info d-none d-lg-flex">
                        <div className="angels-info-price"></div>
                        <div className="angels-info-time"></div>
                      </div>
                    </div>
                    <div className="product-list">
                      <div id="product-item" className="product-item popular">
                        <h4 className="product-title">
              <a href="/">Luggage Storage {area}</a>
                        </h4>
                        <div className="product-content">
                          <div className="product-img">
                            <picture>
                              <img src= {logo} alt="Kuala Lumpur" height="250" width="150"></img>
                            </picture>
                          </div>
                          <div className="product-descr-wrap">
                            <div className="product-descr">
                              <div className="product-open-wrapper">
              <span className="product-open-title">RM{ price_per_hour }/HR</span>
                              </div>
                              <div className="category-opening mt-1">
                                <h5 className="working-time-title">Operating times</h5>
                              <div className="working-time-list">
                                <div className="working-time">
                                  <div className="days">Mon&nbsp;-&nbsp;Sun</div>
                                    <div className="times">
                                      <span>00:00&nbsp;-&nbsp;23:59</span><br />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="rating mt-0 mt-md-0">
                                {/* <div className="stars-count">4.56</div> */}
                                <StarRating/>
                                <div>
                                  <div className="stars-wrap" title="4.56" data-stars="4.56"></div>
                                {/* <div className="stars-rating" >16 Reviews</div> */}
                                </div>
                              </div>
                              <p className="lead">
                                { nearby }<br />
                                { nearby2 }<br />
                              </p>
                              <BookingModal price_per_hour={price_per_hour} setMessage={setMessage} setOpen={setOpen} setColor={setColor}/>
                            </div>    
                            <div className="product-info">
                              <div className="neighborhood d-none d-md-flex">
                                <strong className="neighborhood-title">Neighborhood</strong>
                                <span className="neighborhood-name">Brickfields</span>
                              </div>
                            </div>      
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
                </div>
              ))
            }

        </div>

    )
}

export default LuggageStorage