import React from "react";
import hs from "./App-styles/Header.module.css"
function Header() {
    return (
        <div className={hs.wrapper}>
            <h1>This is the place for the application header</h1>
        </div>
    );
}
export default Header;
