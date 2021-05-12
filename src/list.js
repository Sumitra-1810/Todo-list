import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './list.css';

const List=(prop)=>
{
    
    return(
        <>
        <div className="list">
        <p>{prop.text}
        <span>
            <FontAwesomeIcon className="faicons" icon="trash" onClick={()=>
                   {
                     prop.onSelect(prop.id)
            }}/>
        </span>
            </p>
            </div>
        </>
      );
}
export default List;
