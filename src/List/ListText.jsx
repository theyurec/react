import React from 'react';

const ListText = ({list}) => {


    return (
        <div>
            {list.map((elem, index) => {
                return <div className='list' key={index}><div>{elem}</div></div>
            })}
        </div>
    );
};

export default ListText;