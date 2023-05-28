import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import FoodChipBox from './components/ChipBox/Food/FoodChipBox/FoodChipBox';
import DishChipBox from './components/ChipBox/Dish/DishChipBox/DishChipBox';
import DishList from './components/Card/FoodList/DishList';
import axios from 'axios';
import Header from './Header';
import moment from 'moment';

function Homepage() {

    const [dishes, setDishes] = useState([]);
    const [popularDishes, setPopularDishes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/');
      console.log("result",request);
      setDishes(request.data.dishes);
      setPopularDishes(request.data.popularDishes)
    }
    fetchData();
  }, [])

  console.log('popularDishes suraj :::: ',popularDishes)
    return (
        <>
        <Header title="Select Dishes" from="homepage"/>
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="card-header" style={{ backgroundColor: "black", minHeight: "8vh" }}></div>
            <div style={{ width: "100vw" }}>
                <div className='card box-status'>


                    <div style={{ display: "flex", alignSelf: "center", justifyContent: "space-between" }}>
                        <div className="vr2">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
{moment().format('MMMM Do YYYY')}
                        </div>
                        <div style={{
                            width: "2px",
                            justifyContent: "center",
                            backgroundColor: "#d8d0d0",
                            height: "55px",
                            display: "flex"
                        }} className="vr "></div>
                        <div className="vr3">
                       <img height="20" weight="30" src="alarm-clock.png" alt="alarm"/>
                        {moment().format("hh:mm A")}-{moment().add(2, 'hours').format('hh:mm A')}
                        </div>
                    </div>

                </div>
            </div>



            <div style={{ backgroundColor: "green", minHeight: "40vh" }}>
                <FoodChipBox />
                <h1 className='mt-5'>hello</h1>
                <DishChipBox 
                popularDishes={popularDishes}
                />
            </div>



            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{
                    margin: "15px -2px -13px 15px",
                    display: "flex",
                    flexDirection: "row",
                    // textAlign: "center",
                    // justifyContent: "center"
                }}><p style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "black"
                }}>
                        Recommended
                    </p>
                    <i className="fa fa-caret-down recommended-caret" aria-hidden="true"></i>
                </div>
                <span>
                    <button style={{ margin: "21px 34px 11px 15px" }} type="button" className="btn btn-dark btn-sm ">Menu</button>
                </span>
            </div>

        </div>

        <DishList
        dishes={dishes}
        />
        </>
    )
}

export default Homepage
