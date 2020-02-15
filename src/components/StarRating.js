import React from 'react';
import { FaStar } from "react-icons/fa";

const StarRating = ({star_rating}) => {
    const ratings = star_rating
    return ( 
    <div>
        {[...Array(5)].map((star, i) => (
            <>
            {   
                i < ratings ? <FaStar
                color= "#ffc107"
                margin= {"0"}
                /> : 
                <FaStar
                color= "black"
                margin= {"0"}
                />
            }
            </>
        )
            



        )}   
    </div>
    )
}

export default StarRating
