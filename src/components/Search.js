import React from 'react';
import Select from 'react-select';
import CITIESANDCOUNTRIES from '../constants/CitiesAndCountries';
import axios from 'axios';
import { SearchBarDiv } from './Styled'


const SearchBar = () => {

    let selectedLocation;
    const getStores = (e) => {
        e.preventDefault()
        if (selectedLocation) {
            console.log(selectedLocation)
            // axios request here to get matching stores from DB
            axios({
                method: 'GET',
                url: `https://dropandgo.herokuapp.com/api/v1/stores?location=${selectedLocation.value}`,
            })
                .then(response => { // 'response' could be named anything here. It is simply capturing the return of the promise.
                    console.log(response.data)
                    // do something with the data returned
                })
                .catch(error => {
                    console.error(error.response.data.message)
                    // do something to deal with or show the error
                })
        } else {
            console.log("select a value first")
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

    return (
        <SearchBarDiv>
            <Select options={getLocations()} onChange={LOCATIONS => selectedLocation = LOCATIONS} />
            <button onClick={getStores}>Find my drops</button>
        </SearchBarDiv>

    )

}

export default SearchBar