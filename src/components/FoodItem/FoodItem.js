import React from 'react'
import './FoodItem.css';

function FoodItem(props) {
  return (
    <>
      {
        props.type === "appliances" ?
          <>
            <div className='appl-card'>
              <img width="60" height="100" style={{
                margin: "12px 4px 0px 17px"
              }} src={props.item.image !== "" ? props.item.image : "appliance.png"} alt="appliances" />
              <p>{props.item.name}</p>

            </div>
          </>
          :
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
            <div className='ms-4'>
              {props.item.name}
            </div>
            <div className='me-4'>
              {props.item.quantity}
            </div>
          </div>
      }
    </>
  )
}

export default FoodItem
