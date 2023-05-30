import React, { useEffect, useState } from 'react'
import "./Homepage.css";
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
            setDishes(request.data.dishes);
            setPopularDishes(request.data.popularDishes)
        }
        fetchData();
    }, [])

    return (
        <>
            <Header title="Select Dishes" from="homepage" />
            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                <div className="card-header black-header"></div>
                <div className='header-1'>
                    <div className='card box-status header-2'>
                        <div style={{ display: "flex", alignSelf: "center", justifyContent: "space-between" }}>
                            <div>
                                <div style={{ "marginTop": "17px"}} className="vr2">
                                    <i className="fa fa-none fa-sm fa-md fa-calendar" aria-hidden="true"></i>
                                    {moment().format('MMMM Do YYYY')}
                                </div>
                            </div>
                            <div className="vr "></div>
                            <div>
                                <div style={{ "marginTop": "19px"}} className="vr3">
                                    <img height="20" style={{marginRight:"12px"}} weight="30" src="alarm-clock.png" alt="alarm" />
                                    {moment().format("hh:mm A")}-{moment().add(2, 'hours').format('hh:mm A')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='back'>
                    <FoodChipBox />
                    <div>
                    </div>
                    <DishChipBox
                        popularDishes={popularDishes}
                    />
                </div>

                <hr className='hr1' />
                <div className='div-1'>
                    <div className='div-2'>
                        <p className='para'>
                            Recommended
                        </p>
                        <i className="fa fa-caret-down recommended-caret" aria-hidden="true"></i>
                    </div>
                    <span>
                        <button type="button" className="btn btn-dark btn-sm btn-xs btn3">Menu</button>
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
