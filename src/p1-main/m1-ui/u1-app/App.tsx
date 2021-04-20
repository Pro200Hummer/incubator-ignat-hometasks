import React from "react";
import s from "./App-styles/App.module.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Routes from "./Routes";


function App() {
    return (
        <div className={s.wrapper}>
            <div className={ s.container }>
                <div className={ s.header }>
                    <Header/>
                </div>
                <div className={ s.navbar }>
                    <NavBar/>
                </div>
                <div className={ s.viewer }>
                    <Routes/>
                </div>
            </div>
        </div>
    );
}

export default App;
