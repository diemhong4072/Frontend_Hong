import React from "react";
import "./Header.css";
function ButtonNavbar(props){
    return (
        <div className={props.classBtnNavbar}>
            <div className="navbarIcon">
                <i className="ti-credit-card"></i>
            </div>
            <a className='function'>{props.functionName}</a>
        </div>
    )
}

export default ButtonNavbar;