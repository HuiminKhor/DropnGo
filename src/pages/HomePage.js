import React from 'react';
import { Jumbotron, Button, InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import bgimage from './woman-walking-min.jpg'
import luggage from './luggage.gif'
import search from './search.gif'
import ticket from './ticket.gif'
import SearchBar from '../components/Search'


const HomePage = () => {


    return (
    
            <div className="mid">
                <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover',padding:0 }}>
                    <div className= "opacity">

                    <h1 className="display-3 text-light">It's convenient for a reason</h1>
                    <p className="lead2">DROP&GO allows you leave your luggage in any partnered destination</p>
                    <SearchBar/>
                    {/* <InputGroup className="px-5">
                        <Input />
                        <InputGroupAddon addonType="append" >
                            <InputGroupText>Search</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup> */}
                    <br />
                    {/* <p className="lead2">
                        <Button className="current-location-btn">Use Your Current Location</Button>
                    </p> */}
                    </div> 
                </Jumbotron>

                <section id="how-it-works" className="section about">
                    <h2 className="section-title text-title">Store your bags with just a few clicks</h2>
                    <p className="text-center">Check-in your bags in just 3 minutes!</p>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="about-item">
                                    <div className="about-item-img">
                                    </div>
                                    <div className="about-item-descr">
                                        <img className="image-position" src={search} height="42" width="42"></img>
                                        <h4 className="about-item-title"><span>1</span></h4>
                                        <p className="about-item-text">Find a luggage storage near you</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="about-item">
                                    <div className="about-item-img">
                                    </div>
                                    <div className="about-item-descr">
                                        <img className="image-position" src={ticket} height="42" width="42"></img>
                                        <h4 className="about-item-title"><span>2</span></h4>
                                        <p className="about-item-text">Proceed with online booking</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="about-item">
                                    <div className="about-item-img">
                                    </div>
                                    <div className="about-item-descr">
                                        <img className="image-position" src={luggage} height="42" width="42"></img>
                                        <h4 className="about-item-title"><span>3</span></h4>
                                        <p className="about-item-text">Store your baggage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-right">
                            <div className="col-md-12 ">
                            </div>
                        </div>
                    </div>
                </section >

            </div >

    )
}


export default HomePage