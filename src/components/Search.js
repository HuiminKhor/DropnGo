import React, { useState } from 'react';
import Select from 'react-select';
import CITIESANDCOUNTRIES from '../constants/CitiesAndCountries';
import { SearchBarDiv } from './Styled'
import '../App.css'
import { useHistory } from 'react-router-dom'


const SearchBar = ({ searchClass, loc }) => {
    let history = useHistory();
    let defaultLocation = ""

    if (loc) {
        defaultLocation = CITIESANDCOUNTRIES.find (l => l.value === parseInt(loc))
        defaultLocation.label = defaultLocation.city + ', ' + defaultLocation.country   
    }

    const [selectedLocation, setSelectedLocation] = useState(defaultLocation)

    const getLocations = () => {
        const LOCATIONS = CITIESANDCOUNTRIES.map(location => {
            return {
                ...location,
                label: location.city + ', ' + location.country
            }
        })
        return LOCATIONS;
    }

    const handleLocationChange = (location) => {
        setSelectedLocation(location)
        console.log(location)
    }

    const getStores = (e) => {
        if (selectedLocation.length !== 0) {
            e.preventDefault()
            let path = `/luggage-storage/${selectedLocation.city}?index=${selectedLocation.value}`;
            history.push(path);
        } else {
            console.log("please select somewhere first")
        }
    }

    return (
        <SearchBarDiv>
            <Select className={searchClass} options={getLocations()} onChange={handleLocationChange} defaultValue={defaultLocation}/>
            <button onClick={getStores} className="searchNowButton">Search</button>
        </SearchBarDiv>

    )
}


export default SearchBar