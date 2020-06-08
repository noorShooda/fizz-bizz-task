import React from 'react';

import  './header.css';
import { Navigation } from './navigation/Navigation';

export const Header : React.FunctionComponent = () => {

    return(
        <div className="headerStyle">
            <Navigation/>
        </div>
    );
}