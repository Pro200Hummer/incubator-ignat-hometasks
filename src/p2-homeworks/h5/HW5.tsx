import React from "react";
import Header from "../../p1-main/m1-ui/u1-app/Header";
import Routes from "../../p1-main/m1-ui/u1-app/Routes";
import {HashRouter} from "react-router-dom";


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/ }
            <HashRouter>

                <Header/>

                <Routes/>

            </HashRouter>
        </div>
    );
}
export default HW5;
