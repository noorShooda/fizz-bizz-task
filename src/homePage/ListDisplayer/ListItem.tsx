import React from 'react';

interface Props {
    item: String;
}

export const ListItem : React.FunctionComponent<Props> = (props) => {
    
    return(
        <div>
            {props.item}
        </div>);
}