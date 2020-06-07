import React from 'react';
import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { rootingURL } from '../../config/rootingURL';
import './navigation.css';

export const Navigation = ()=>{
    return(
        <ul className="listStyle">
            <li className="listItemStyle"><BsFillHouseFill/><Link className="headerItemStyle" to={rootingURL.home}>Home</Link></li>
        </ul>
    )
}