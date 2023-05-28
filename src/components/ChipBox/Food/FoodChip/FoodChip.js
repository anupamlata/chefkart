import React from 'react'
import './FoodChip.css';

function FoodChip(props) {
    return (
        <div className='chip'>
            <div>{props.chip.name}</div>
        </div>
    )
}

export default FoodChip
