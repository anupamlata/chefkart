import React from 'react'
import './FoodCard.css';
import { useNavigate } from 'react-router-dom';


function FoodCard(props) {
    const navigate = useNavigate();
    return (
        <>
            <div onClick={() => navigate(`/${props?.dish?.id}`)}>
                <div className='food-card mb-3'>
                    <div className='food-div'>
                        <div>
                            <div className='food-div1'>
                                <span className='food-span'>{props.dish.name}</span>
                                <img style={{ marginLeft: "4px" }} height="15" weight="20" src="circle-inside-square.svg" alt="veg_show" />
                                <span className='food-span1 badge'>{props.dish.rating}</span>
                            </div>
                            <div className='food-div2'>
                                {props.dish.equipments.map((equip, index) => (
                                    <div key={index} className='food-div3'>
                                        <img width="20" height="25" src="refrigerator.png" alt='appliance' />
                                        <span style={{ fontSize: "8px" }}>{equip}</span>
                                    </div>
                                ))}
                                <div className="vr food-div4"></div>

                                <div style={{ marginLeft: "12px" }}>
                                    <div className="food-div5">
                                        Ingredients
                                    </div>
                                    <div className="food-div6">
                                        View list
                                        <span style={{ marginLeft: "-9px" }}>
                                            <i className="fa fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="food-div7">
                                {props.dish.description}
                            </div>
                        </div>
                        <div>
                            <img className="food-card-img" width="120" height="130" src={props.dish.image} alt="foodcard" />
                            <div style={{ margin: "-12px" }}>
                                <button className="add-btn">
                                    <span> Add </span>
                                    <div className='plus-btn'>+</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default FoodCard
