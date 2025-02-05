import { CDN_LINK } from "../utils/links";
import CDN_LINK from "../utils/links";

const ResturentCards = (prop) =>{
    const {resData} = prop
    const {name,avgRating,cloudinaryImageId,cuisines,deliveryTime,costForTwo} = resData?.data;
    console.log(resData.data);
    return (
        <div className="res-card">
            <img className="res-img" src={CDN_LINK}/>
            <h2>{name}</h2>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo / 100} For Two</h4>
        </div>
    )
} 
export default ResturentCards;