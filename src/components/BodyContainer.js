import ResturentCards from "./ResturentCards";
import { resList } from "../utils/resList";
import { useState } from "react";



const BodyContainer = () =>{
    const [listOfRes , setListOfRes] = useState(resList);
    
    return (
        <div className="body-container">
            <div>
                <button className="filter-btn" onClick={()=>{

                    let List = resList.filter(res=> res.data.avgRating > 4 )
                    console.log(List)
                    setListOfRes(List);
                }}>top rated</button>
            </div>
            <div className="res-container">
                {listOfRes.map(resturant =><ResturentCards key={resturant.data.id} resData={resturant}/>)}
           
            </div>
        </div>
    )
} 

export default BodyContainer; 