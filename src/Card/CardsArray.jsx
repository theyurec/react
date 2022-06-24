import React from 'react';
import './Card.css'

const CardsArray = ({newArr, copy}) => {
    return (
        <div>
            <div className="mini-cards">
                {
                    newArr.slice(0, copy).map((index) => {
                        return (
                            <div key={index} className='mini-card'>
                                <div className="mini-card-img"></div>
                                <div className="mini-card-date">MAR 23, 2022</div>
                                <h2 className="mini-card-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                                <div className="mini-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa deleniti dignissimos dolore est, eveniet, excepturi fugiat harum inventore iste iusto labore nulla, praesentium quasi recusandae tempore vel veritatis.</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CardsArray;