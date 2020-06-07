import React from 'react';

import './listDisplayer.css';
import { ListItem } from './ListItem';
import { verifyDivisibility } from '../../helpers/helpers';

export const ListDisplayer  = (props) => {
    
    const displyListOfNumbers = () => {
        var list = [];
        for(var i = 1; i <= 100; i++){
            const item = verifyDivisibility(i);
            list.push(item);
        }
        return(list);
    }
    const list = displyListOfNumbers();

    return(
        <div className="listDisplayerStyle">
            {list.map(x => <ListItem item={x} />)}
        </div>
    );
}