import React from "react";
import ReactDOM from "react-dom/client";
import HeaderContainer  from "./components/HeaderContainer";
import BodyContainer from "./components/BodyContainer";


 
const FoodContainer = () =>{
    return (
        <div>
            <HeaderContainer/>
            <BodyContainer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodContainer/>);
