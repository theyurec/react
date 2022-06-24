import React, {useState} from 'react';

const ListText = ({list}) => {


    return (
        <div>
            {list.map((elem, index) => {
                return <div className='list' key={index}><a href='#'>{elem}</a></div>
            })}
        </div>
    );
};

export default ListText;