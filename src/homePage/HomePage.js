import React , { useState } from "react";

import { ListDisplayer } from "./ListDisplayer/ListDisplayer";
import './homePage.css';

const HomePage = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    function displayOrHide () {
        setIsDisplayed(function(o) {
            return !o;
        });
    }

    const getList = () => {
        if (isDisplayed) {
            return (<ListDisplayer/>);
        } else {
            return null;
        }

    }

    return(
        <div className="homePageStyle">
            <div className="displayStyle">
                <h5>Fizz Bizz List : </h5>
                <button className="buttonDiscoverStyle" onClick={displayOrHide}>{isDisplayed ? "Hide": "Discover"}</button>
            </div>
            <div className="displayStyle">
                {getList()}
            </div>
              
        </div>
    ); 
}

export default HomePage;