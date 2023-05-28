import React from 'react'
import './DishChip.css';

function DishChip(props) {
  return (
    <div style={{ backgroundImage: "url(" + props.chip.image + ")" }} className='dish-chip'>
      <div className='chip-label'>&nbsp;&nbsp;{props.chip.name.length > 7 ? props.chip.name.slice(0, 7) + ".." : props.chip.name}</div>
    </div>
  )
}

export default DishChip
