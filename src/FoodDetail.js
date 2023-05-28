import Header from './Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FoodItem from './components/FoodItem/FoodItem';



function FoodDetail(props) {

  const { id } = useParams();
  const [foodDetail, setFoodDetail] = useState({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${id}`);
      console.log("result", request);
      setFoodDetail(request.data)
    }
    fetchData();
  }, [])
  console.log(foodDetail);
  return (
    <>
      <Header title="" from="food-detail"/>
      <h1 style={{ marginRight: "90px" }}>
        {foodDetail.name}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse quo porro libero, dignissimos repellendus.</p>
      <i style={{ fontSize: "xx-large" }} className="fa fa-clock-o" aria-hidden="true">{foodDetail.timeToPrepare
      }</i>

      <hr />

      <>
        <h4>Vegetables ({foodDetail?.ingredients?.vegetables.length}) <i className="fa fa-caret-down" aria-hidden="true"></i></h4>
        {foodDetail?.ingredients?.vegetables.map((vegetable, index) => <FoodItem
          type="vegetables"
          key={index}
          item={vegetable}
        />
        )}
      </>

      <>
        <h4>Spices ({foodDetail?.ingredients?.spices.length}) <i className="fa fa-caret-down" aria-hidden="true"></i></h4>
        {foodDetail?.ingredients?.spices.map((spice, index) => <FoodItem
          type="spices"
          key={index}
          item={spice}
        />
        )}
      </>


      <>
        <h4>Appliances  <i className="fa fa-caret-down" aria-hidden="true"></i></h4>
        <div style={{ display: "flex", flexDirection: "row", }}>


          {foodDetail?.ingredients?.appliances.map((spice, index) => <FoodItem
            type="appliances"
            key={index}
            item={spice}
          />
          )}




        </div>





      </>


    </>
  )
}

export default FoodDetail
