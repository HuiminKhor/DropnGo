import React from 'react';
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    return ( 
    <div>
        {[...Array(5)].map((star) => {
            return <FaStar
            color= {"#ffc107"}
            margin= {"0"}
            />


        })}   
    </div>
    )
}

export default StarRating
