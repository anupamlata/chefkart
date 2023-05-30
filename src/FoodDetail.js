import Header from './Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FoodItem from './components/FoodItem/FoodItem';
import './Header.css'


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
      <Header title="" from="food-detail" />
      <div style={{backgroundImage:"url("+'food-dp.jpeg'+")"}}>

      <h1 style={{ marginRight: "90px", fontWeight: "900", textAlign: "start", marginLeft: "5vh" }}>
        {foodDetail.name}
      </h1>

      <p style={{ fontWeight: "100", textAlign: "start", marginLeft: "5vh", marginRight: "8vh" }}>Mughlai Masala is a style of cookery developed in the India Subcontinent by the Imperial kitchens of the Mughal Empire.</p>
      <div style={{ textAlign: "initial", marginLeft: "3.3vh" }}>
        <i className="fa fa-clock-o" aria-hidden="true"> <span>{foodDetail.timeToPrepare
        }</span></i>
      </div>

</div>

      <hr style={{ textAlign: "start", textAlign: "end", marginRight: "5vh", height: "3px", color: "lightgrey" }} />
      <div style={{ textAlign: "start", marginLeft: "5vh" }}>
        <h3 style={{
          fontSize: "x-large",
          fontWeight: "600"
        }}>Ingredients</h3>
        <p style={{
          fontSize: "x-small",
          fontWeight: "200"
        }}>For 2 people</p>
      </div>
      <hr style={{ textAlign: "start", textAlign: "end", marginRight: "5vh", marginLeft: "5vh" }} />

      <>
        <h4 className='style'>Vegetables ({foodDetail?.ingredients?.vegetables.length}) <i className="fa fa-caret-down" aria-hidden="true"></i></h4>
        {foodDetail?.ingredients?.vegetables.map((vegetable, index) => <FoodItem
          type="vegetables"
          key={index}
          item={vegetable}
        />
        )}
      </>

      <>
        <h4 className='style'>Spices ({foodDetail?.ingredients?.spices.length}) <i className="fa fa-caret-down" aria-hidden="true"></i></h4>
        {foodDetail?.ingredients?.spices.map((spice, index) => <FoodItem
          type="spices"
          key={index}
          item={spice}
        />
        )}
      </>


      <>
        <h4 style={{
          marginTop: "2vh", marginBottom: "3vh", textAlign: "start", fontSize: "x-large",
          fontWeight: "600", marginLeft: "5vh"
        }}>Appliances </h4>
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
