import React from 'react'
import FoodChip from '../FoodChip/FoodChip';
import "./FoodChipBox.css";

function FoodChipBox(props) {
    const aaa = [1, 2,3,3,,3,3,,33,3,3]
    return (
        <>
            <div className="chip-box">
                <div className="chip-scroll-bar">
                    {aaa.map((chip,index) => <FoodChip
                    key={index}
                        chipName={'Italina'}
                    />)}
                </div>
            </div>
        </>
    )
}

export default FoodChipBox
