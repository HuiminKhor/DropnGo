import React,{useState,useEffect} from 'react';
import '../App.css'
import StarRating from '../components/StarRating.js'
import BookingModal from '../containers/booking';
import axios from "axios"
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/Search'
import heavy from './heavy.png'




const LuggageStorage = ({setMessage , setOpenAlert , setColor}) => {

    let params = new URLSearchParams(useLocation().search)
    let loc = params.get('index')

    const [stores, setStores] = useState([])

    const [locError, setLocError] = useState("")

 
    useEffect(()=>{
        axios({
            method: 'GET',
            url: `https://dropandgo.herokuapp.com/api/v1/stores/?loc=${loc}`
        })
        .then(response => {
            setStores(response.data)
            // do something with the data returned
        })
        .catch(error => {
            setLocError(error.response.data)
            setStores([])
            // do something to deal with or show the error
        })
    },[loc])


    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div>
            <SearchBar searchClass="searchbarTwo" loc={loc}/>

              {/* <div className="search">
                <input type="text" className="searchTerm" placeholder="City, Address or Location"/>
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
              </div> */}
            </div>
            { stores.length !== 0 ?
              stores.map(({ price, operating_day, opening_hours, star_rating, city, id, nearby, nearby2, area, store_image})=>(
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
                              <img src= {store_image} alt="Kuala Lumpur" height="250" width="150"></img>
                            </picture>
                          </div>
                          <div className="product-descr-wrap">
                            <div className="product-descr">
                              <div className="product-open-wrapper">
              <span className="product-open-title">RM{ price }/HR</span>
                              </div>
                              <div className="category-opening mt-1">
                                <h5 className="working-time-title">Operating times</h5>
                              <div className="working-time-list">
                                <div className="working-time">
                                  <div className="days">{ operating_day }</div>
                                    <div className="times">
              <span>{ opening_hours }</span><br />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="rating mt-0 mt-md-0">
                                {/* <div className="stars-count">4.56</div> */}
                                <StarRating star_rating={star_rating}/>
                                <div>
                                  <div className="stars-wrap" title="4.56" data-stars="4.56"></div>
                                {/* <div className="stars-rating" >16 Reviews</div> */}
                                </div>
                              </div>
                              <p className="lead">
                                { nearby }<br />
                                { nearby2 }<br />
                              </p>
                              <BookingModal area={area} price={price} setMessage={setMessage} setOpenAlert={setOpenAlert} setColor={setColor} store_id={id}/>
                            </div>    
                            <div className="product-info">
                              <div className="neighborhood d-none d-md-flex">
                                {/* <strong className="neighborhood-title">Neighborhood</strong>
                                <span className="neighborhood-name">Brickfields</span> */}
                              </div>
                            </div>      
                          </div>x
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
                </div>
                
              ))
              : 
              <div className="ErrorNoStore">
              <img src={heavy} width="150" height="150"></img>
              <div>{!locError.is_success ? "Sorry, there are no stores for that location" : null }</div>
              </div>
            } 

        </div>

    )
}

export default LuggageStorage