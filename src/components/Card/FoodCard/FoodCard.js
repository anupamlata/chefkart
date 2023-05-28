import React from 'react'
import './FoodCard.css';
import { useNavigate } from 'react-router-dom';


function FoodCard(props) {
    const navigate = useNavigate();
    return (
        <>
            <div onClick={() => navigate(`/${props?.dish?.id}`)}>
                <div className='food-card mb-3'>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", border: "1px solid red" }}>
                        <div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <span style={{ fontSize: "16px", fontWeight: "700" }}>{props.dish.name}</span>
                                <img style={{ marginLeft: "4px" }} height="15" weight="20" src="circle-inside-square.svg" alt="veg_show" />
                                <span style={{ color: "white", backgroundColor: "#51C452", marginLeft: "4px" }} className="badge">{props.dish.rating}</span>


                            </div>


                            <div style={{ display: "flex", flexDirection: "row", marginTop: "12px" }}>

                                {props.dish.equipments.map((equip, index) => (

                                    <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginRight: "10px" }}>
                                        <img width="20" height="25" src="refrigerator.png" alt='appliance' />
                                        <span style={{ fontSize: "8px" }}>{equip}</span>
                                    </div>

                                ))}

                                <div style={{
                                    width: "1px",
                                    justifyContent: "center",
                                    backgroundColor: "#d8d0d0",
                                    height: "35px",
                                    display: "flex"
                                }} className="vr "></div>


                                <div style={{marginLeft:"12px"}}>
                                    <div style={{fontSize:"12px",fontWeight:"700"}}>
                                    Ingredients
                                        </div>
                                    <div style={{fontSize:"8px",textAlign:"start",fontWeight:"700",color:"orange",marginTop:"-7px",cursor:"pointer"}}>
                                    View list
<span style={{marginLeft:"-9px"}}>
<i className="fa fa-chevron-right"></i>
</span>
                                    
                                    </div>
                                </div>
                            </div>

                            <div style={{ margin: "5px 18px 0px 0px", lineHeight: "1", textAlign: "start", border: "1px solid red" }}>
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
