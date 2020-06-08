import React from 'react';

import  './header.css';
import { Navigation } from './navigation/Navigation';
import logoImg from '../images/logo.jpg';

export const Header : React.FunctionComponent = () => {

    return(
        <div className="headerStyle">
            <div className="companyImgStyle"><img src={logoImg} alt="PRIMUS DELPHI GROUP GmbH" height="100" width="100"/></div>
            <Navigation/>
        </div>
    );
}