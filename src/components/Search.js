import React, { useState } from 'react';
import Select from 'react-select';
import CITIESANDCOUNTRIES from '../constants/CitiesAndCountries';
import axios from 'axios';
import { SearchBarDiv } from './Styled'
import '../App.css'
import { useHistory } from 'react-router-dom'


const SearchBar = () => {
    let history = useHistory();

    const [selectedLocation, setSelectedLocation] = useState({})

    const getStores = (e) => {
        if (selectedLocation !== {}) {
            console.log(selectedLocation)
            e.preventDefault()
            let path = `/luggage-storage/${selectedLocation.city}?index=${selectedLocation.value}`;
            history.push(path);
        } else {
            console.log("please select somewhere first")
        }
    }


    const getLocations = () => {
        const LOCATIONS = CITIESANDCOUNTRIES.map(location => {
            return {
                ...location,
                label: location.city + ', ' + location.country
            }
        })
        console.log(LOCATIONS)
        return LOCATIONS;
    }

    const handleLocationChange = (location) => {
        setSelectedLocation(location)
      }

    return (
        <SearchBarDiv>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Select className="searchbar" options={getLocations()} onChange={handleLocationChange} /> 
            <button onClick={getStores}><i className="fa fa-search"></i></button>
        </SearchBarDiv>
    )
}

export default SearchBar