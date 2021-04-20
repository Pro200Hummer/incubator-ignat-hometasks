import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <div>
                <NavLink to={"/pre-junior"}>PreJunior</NavLink>
                <NavLink to={"/junior"}>Junior</NavLink>
                <NavLink to={"/iron-junior"}>IronJunior</NavLink>
            </div>
        </div>
    );
}
export default NavBar;
