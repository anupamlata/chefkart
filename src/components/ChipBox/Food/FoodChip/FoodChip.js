import React from 'react'
import './FoodChip.css';

function FoodChip(props) {
    return (
        <div className='chip'>
            <div>{props.chipName}</div>
        </div>
    )
}

export default FoodChip
