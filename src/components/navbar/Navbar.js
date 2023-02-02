import React from "react";
import maluma from "../../assets/images/maluma.webp"

function Navbar(){
    return (
        <div className="nav_container">
            <div className="album_heading">
                <h2>
                    Albums
                </h2>
            </div>

            <div className="input_profile">
                <input type="text"></input>
                <div className="profile">
                    <img src={maluma} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;