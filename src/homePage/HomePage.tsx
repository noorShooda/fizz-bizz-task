import React , { useState } from "react";
import { Redirect } from 'react-router-dom';

import { ListDisplayer } from './ListDisplayer/ListDisplayer';
import { rootingURL } from '../config/rootingURL';
import './homePage.css';

const HomePage : React.FunctionComponent = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    function displayOrHide () {
        setIsDisplayed(function(previousState) {
            return !previousState;
        });
    }

    if(!isLoggedIn){
        return(<Redirect to={rootingURL.login}/>);
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
