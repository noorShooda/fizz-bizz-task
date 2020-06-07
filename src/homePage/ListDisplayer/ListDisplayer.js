import React from 'react';

import './listDisplayer.css';
import { ListItem } from './ListItem';
import { verifyDivisibility } from '../../helpers/helpers';

export const ListDisplayer  = () => {
    
    const displyListOfNumbers = ([start,end]) => {
        var list = [];
        for(var i = start; i <= end; i++){
            const item = verifyDivisibility(i);
            list.push(item);
        }
        return(list);
    }

    const firstList = displyListOfNumbers([1,25]);
    const secondList = displyListOfNumbers([26,50]);
    const thirdList = displyListOfNumbers([51,75]);
    const forthList = displyListOfNumbers([76,100]);

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