import React from 'react'
import FoodCard from '../FoodCard/FoodCard'

function DishList(props) {
  return (
    <>
    {props?.dishes?.length>0 && props.dishes.map((dish,index)=><FoodCard
    key={index}
    dish={dish}/>)}
    </>
  )
}

export default DishList
