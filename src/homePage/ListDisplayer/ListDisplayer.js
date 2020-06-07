import React from 'react';

import './listDisplayer.css';
import { ListItem } from './ListItem';
import { verifyDivisibility } from '../../helpers/helpers';

export const ListDisplayer  = (props) => {
    
    const displyFirstListOfNumbers = () => {
        var list = [];
        for(var i = 1; i <= 25; i++){
            const item = verifyDivisibility(i);
            list.push(item);
        }
        return(list);
    }

    const displySecondListOfNumbers = () => {
        var list = [];
        for(var i = 26; i <= 50; i++){
            const item = verifyDivisibility(i);
            list.push(item);
        }
        return(list);
    }
    
    const displyThirdListOfNumbers = () => {
        var list = [];
        for(var i = 51; i <= 75; i++){
            const item = verifyDivisibility(i);
            list.push(item);
        }
        return(list);
    }

    const displyForthListOfNumbers = () => {
        var list = [];
        for(var i = 76; i <= 100; i++){
            const item = verifyDivisibility(i);
            list.push(item);
        }
        return(list);
    }
    const firstList = displyFirstListOfNumbers();
    const secondList = displySecondListOfNumbers();
    const thirdList = displyThirdListOfNumbers();
    const forthList = displyForthListOfNumbers();

    return(
        <div className="listDisplayerStyle">
            <div className="listStyle">
                {firstList.map(x => <ListItem item={x} />)}
            </div>
            <div className="listStyle">
            {secondList.map(x => <ListItem item={x} />)}
            </div>
            <div className="listStyle">   
                {thirdList.map(x => <ListItem item={x} />)}
            </div>
            <div className="listStyle">   
                {forthList.map(x => <ListItem item={x} />)}
            </div>
        </div>
    );
}