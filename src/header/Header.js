import React from 'react';

import  './header.css';
import { Navigation } from './navigation/Navigation';

export const Header = () => {

    return(
        <div className="headerStyle">
            <Navigation/>
        </div>
    );
}