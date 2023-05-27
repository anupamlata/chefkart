import React from 'react'
import "./Navbar.css";
import FoodChipBox from './components/ChipBox/Food/FoodChipBox/FoodChipBox';
import DishChipBox from './components/ChipBox/Dish/DishChipBox/DishChipBox';

function Navbar() {
    return (
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="card-header" style={{ backgroundColor: "black", minHeight: "8vh" }}></div>
            <div style={{ width: "100vw" }}>
                <div className='card box-status'>


                    <div style={{ display: "flex", alignSelf: "center", justifyContent: "space-between" }}>
                        <div className="vr2">
                            asdasbdfj
                        </div>
                        <div style={{
                            width: "2px",
                            justifyContent: "center",
                            backgroundColor: "#d8d0d0",
                            height: "55px",
                            display: "flex"
                        }} className="vr "></div>
                        <div className="vr3">
                            helloaslkfjlksjfklsdj
                        </div>
                    </div>

                </div>
            </div>



            <div style={{ backgroundColor: "green", minHeight: "40vh" }}>
                <FoodChipBox/>
                <h1 className='mt-5'>hello</h1>
                <DishChipBox/>




            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}/* style={{ backgroundColor: "red", minHeight: "7vh", display: "flex", justifyContent: "space-between", justifyContent: "center",
    textAlign: "center" }} */>
                {/* <div className="d-flex justify-content-between"> */}
                <div style={{
                    margin: "15px -2px -13px 15px",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center"
                }}><p style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "black"
                }}>
                        Recommended
                    </p>
                    <i className="fa fa-caret-down recommended-caret" aria-hidden="true"></i>
                </div>
                <span >

                    <button style={{ margin: "-4px 15px 3px 0px" }} type="button" className="btn btn-dark btn-sm ">Menu</button>
                </span>
            </div>
        </div>
    )
}

export default Navbar
