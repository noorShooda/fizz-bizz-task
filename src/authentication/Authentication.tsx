import React, { useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { userName, userPassword} from '../client/credentials.json';
import './authentication.css';
import  logoImg  from '../images/logo.jpg';
import { rootingURL } from '../config/rootingURL';

const Authentication : React.FunctionComponent = () =>{

    const[typedUserName,setUserName]= useState("");
    const[typedUserPassword,setUserPassword]= useState("");
    let history = useHistory();
    localStorage.setItem('isLoggedIn','false');

    
    const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.currentTarget.value);
    }
    const handleUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.currentTarget.value);
    }
    const handleLogInButton = () => {
        if((typedUserName === userName) && (typedUserPassword === userPassword)){
            localStorage.setItem('isLoggedIn','true');
            history.push(rootingURL.home);
        }
    }
    
    return(
        <div className="loginBoxStyle">
            <img className="logoStyle" src={logoImg} alt="PRIMUS DELPHI GROUP GmbH" />
            <div className="formStyle">
                <input className="inputStyle" onChange={handleUserName} value={typedUserName} type="userName" placeholder="Username"/>
                <input className="inputStyle" onChange={handleUserPassword} value={typedUserPassword} type="password" placeholder="Password"/>
                <button className="loginButtonStyle" onClick={handleLogInButton} > Log In </button>
            </div>
        </div>
    )
}

export default Authentication;