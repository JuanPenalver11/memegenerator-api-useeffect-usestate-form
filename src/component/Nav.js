import React from "react";
import icon from "../img/icon.png"
import '../style/Nav.css';



function Nav (){
    return (
        <nav>
            <div className="icon-website"><img src={icon} alt="icon-website"/></div>
            <div className="title-website"><p>Random Meme Generator</p></div>
        </nav>
    )
}

export default Nav