import React, { useEffect, useState } from 'react';
import { RiLoginCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { rootingURL } from '../../config/rootingURL';
import './navigation.css';

export const Navigation : React.FunctionComponent = () => {

    const[isLoggedIn,setIsLoggedIn]= useState(localStorage.getItem('isLoggedIn'));

    useEffect(() => {
        console.log("use effect");
        setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    },[]);

    return(
        <ul className="listStyle">
            { isLoggedIn === "true" ? 
            <li className="listItemStyle">
                <Link className="headerItemStyle" to={rootingURL.home}>Home</Link>
            </li> :
            <li className="listItemStyle">
                <RiLoginCircleLine/>
                <Link className="headerItemStyle" to={rootingURL.login}>Log In</Link>
            </li>
            }           
        </ul>
    )
}