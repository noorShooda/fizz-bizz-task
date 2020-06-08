import React from 'react';

import './listDisplayer.css';
import { ListItem } from './ListItem';
import { verifyDivisibility } from '../../helpers/helpers';

export const ListDisplayer : React.FunctionComponent  = () => {
    
    const displyListOfNumbers  = (forStart : number , forEnd : number) => {
        var list : Array<String> = [];
        for(var i = forStart; i <= forEnd; i++){
            const item : String = verifyDivisibility(i);
            list.push(item);
        }
        return(list);
    }

    const firstList : Array<String> = displyListOfNumbers(1,25);
    const secondList : Array<String> = displyListOfNumbers(26,50);
    const thirdList : Array<String> = displyListOfNumbers(51,75);
    const forthList : Array<String> = displyListOfNumbers(76,100);

    return(
        <div className="listDisplayerStyle">
            <div className="listStyle">
                {firstList.map((x,index)=> <ListItem item={x} key={index} />)}
            </div>
            <div className="listStyle">
            {secondList.map((x,index)=> <ListItem item={x} key={index} />)}
            </div>
            <div className="listStyle">   
                {thirdList.map((x,index)=> <ListItem item={x} key={index} />)}
            </div>
            <div className="listStyle">   
                {forthList.map((x,index) => <ListItem item={x} key={index} />)}
            </div>
        </div>
    );
}