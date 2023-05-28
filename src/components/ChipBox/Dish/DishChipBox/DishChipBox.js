import React from 'react'
import DishChip from '../DishChip/DishChip';
import "./DishChipBox.css";

function DishChipBox(props) {
    return (
        <>
            <div className="dish-chip-box">
                <div className="dish-chip-scroll-bar">
                    {props.popularDishes.map((chip,index) => <DishChip
                    key={index}
                    chip={chip}
                    />)}
                </div>
            </div>
        </>
    )
}

export default DishChipBox
