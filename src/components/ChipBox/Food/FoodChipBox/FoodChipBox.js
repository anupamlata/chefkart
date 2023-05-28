import React from 'react'
import FoodChip from '../FoodChip/FoodChip';
import "./FoodChipBox.css";

function FoodChipBox(props) {
    const foodChipList = [{ name: "Indian" }, { name: "Italina" }, { name: "Chinese" }]
    return (
        <>
            <div className="chip-box">
                <div className="chip-scroll-bar">
                    {foodChipList.map((chip, index) => <FoodChip
                        key={index}
                        chip={chip}
                    />)}
                </div>
            </div>
        </>
    )
}

export default FoodChipBox
