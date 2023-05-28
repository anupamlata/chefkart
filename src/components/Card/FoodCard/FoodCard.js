import React from 'react'
import './FoodCard.css';
import { useNavigate } from 'react-router-dom';


function FoodCard(props) {
    const navigate = useNavigate();
    // console.log(props);

    return (
        <>
      
        <div  onClick= {() => navigate(`/${props?.dish?.id}`)} className="row">
            <div className="col-md-6 mb-3">
                {/* <div className="card"> */}
                    <div className="" style={{ display: "flex", flexDirection: "row", }}>
                        <div className="row">
<div className="col-sm-8">
    <div className="row">
        <div className="col-8">
 <div style={{ display: "flex", flexDirection: "row",alignItems: "flex-start" }}>
                            <h3>{props.dish.name}</h3>
                            <img height="30" weight="30" src="circle-inside-square-svgrepo-com.svg" alt="hi" />
                            <img height="30" weight="30" src="circle-inside-square-svgrepo-com.svg" alt="hi" />
                        </div>
                        </div> 
                        
    </div>
</div>
<div className="col-sm-4">
<img height="10" width="10" src="food.png" alt="food-image" />
</div>
                        </div>
                       
                        {/* <span>
                            <div >
                                <div className="row mt-5 ms-3">
                                    refrigerator
                                    refrigerator
                                </div>
                                <div style={{
                                    width: "2px",
                                    justifyContent: "center",
                                    backgroundColor: "#d8d0d0",
                                    height: "55px",
                                    display: "flex", marginLeft: "200px"
                                }} className="vr "></div>
                                <div>Ingredient</div>
                            </div>

                            <p className="row mt-5">
                                Chicken fried in deep tomato sauce with delicious spices
                            </p>

                        </span> */}
                        {/* <span style={{ marginLeft: "30vh" }}><img height="130" width="130" src="food.png" alt="food-image" /></span> */}
                        {/* <a href="#" class="btn btn-primary"></a> */}
                    </div>
                {/* </div> */}
            </div >
            {/* <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> */}
        </div >
        </>
        

        // <>
        //     <div style={{ height: "22px" }}>
        //         <div className="row ">
        //             <div className="col-sm-8">
        //                 {/* <div className="row"> */}
        //                     <div style={{ display: "flex", flexDirection: "row", }}>
        //                         {/* <div className="row"> */}
        //                         <h3>Masala Muglai</h3>
        //                         <img height="30" weight="30" src="circle-inside-square-svgrepo-com.svg" alt="hi" />
        //                         {/* <span className="badge badge-sm veg-col">4.2<i className="fa fa-star" aria-hidden="true"></i>
        //                         </span> */}
        //                     </div>
        //                 {/* </div> */}


        //                 {/* <div className="row"> */}
        //                     refrigerator
        //                     refrigerator
        //                 {/* </div> */}

        //                 {/* <div className="row"> */}
        //                     refrigerator
        //                     refrigerator
        //                 {/* </div> */}
        //             </div>
        //             {/* </div> */}
        //             <div className="col-sm-4">
        //                 <img height="60" width="60" src="food.png" alt="food-image" />
        //             </div>
        //         </div>

        //     </div>
        // </>
    )
}

export default FoodCard
