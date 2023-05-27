import React from 'react'
import DishChip from '../DishChip/DishChip';
import "./DishChipBox.css";

function DishChipBox(props) {
    const aaa = [1, 2,3,3,,3,3,,33,3,3]
    return (
        <>
            <div className="dish-chip-box">
                <div className="dish-chip-scroll-bar">
                    {aaa.map((chip,index) => <DishChip
                    key={index}
                        chipName={'Italina'}
                    />)}
                </div>
            </div>
        </>
    )
}

export default DishChipBox
