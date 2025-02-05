import { LOGO_LINK } from "../utils/links";
const HeaderContainer = () =>{
    return (
        <div className="header-container">
            <img className="logo-img" alt="logo" src={LOGO_LINK}/>
            <div >
                <ul className="nav-items">
                    <li>home</li>
                    <li>menu</li>
                    <li>about us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
} 
export default HeaderContainer; 