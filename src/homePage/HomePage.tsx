import React , { useState } from "react";

import { ListDisplayer } from "./ListDisplayer/ListDisplayer";
import './homePage.css';

const HomePage : React.FunctionComponent = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    function displayOrHide () {
        setIsDisplayed(function(previousState) {
            return !previousState;
        });
    }

    return(
        <div className="homePageStyle">
            <div className="displayStyle">
                <h5>Fizz Bizz List : </h5>
                <button className="buttonDiscoverStyle" onClick={displayOrHide}>{isDisplayed ? "Hide": "Discover"}</button>
            </div>
                {isDisplayed && <div className="displayStyle"><ListDisplayer/></div>}
        </div>
    ); 
}

export default HomePage;