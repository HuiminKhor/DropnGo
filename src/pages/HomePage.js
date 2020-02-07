import React from 'react';
import { Jumbotron, Button, InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';


const HomePage = () => {










    return (
        <container>
            <div>
                <Jumbotron>
                    <h1 className="display-3">It's convenient for a reason</h1>
                    <p className="lead">DROP&GO allows you leave your luggage in any partnered destination</p>
                    <InputGroup>
                        <Input />
                        <InputGroupAddon addonType="append" >
                            <InputGroupText>Search</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    <br />
                    <p>Or</p>
                    <p className="lead">
                        <Button color="primary">Use Your Current Location</Button>
                    </p>
                </Jumbotron>

                <section id="how-it-works" class="section about">
                    <h2 class="section-title text-title">Store your bags with just a few clicks</h2>
                    <p class="text-center">Check-in your bags in just 3 minutes!</p>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-3">
                                <div class="about-item">
                                    <div class="about-item-img">
                                        <svg class="image" viewBox="0 0 90 90">
                                        </svg>
                                    </div>
                                    <div class="about-item-descr">
                                        <h4 class="about-item-title"><span>1</span></h4>
                                        <p class="about-item-text">Find a luggage storage near you</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="about-item">
                                    <div class="about-item-img">
                                        <svg class="image" viewBox="0 0 90 90">
                                        </svg>
                                    </div>
                                    <div class="about-item-descr">
                                        <h4 class="about-item-title"><span>2</span></h4>
                                        <p class="about-item-text">Proceed with online booking</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="about-item">
                                    <div class="about-item-img">
                                        <svg class="image" viewBox="0 0 90 90">
                                        </svg>
                                    </div>
                                    <div class="about-item-descr">
                                        <h4 class="about-item-title"><span>3</span></h4>
                                        <p class="about-item-text">Store your baggage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row text-right">
                            <div class="col-md-12 ">
                            </div>
                        </div>
                    </div>
                </section >

            </div >

        </container >
    )
}


export default HomePage