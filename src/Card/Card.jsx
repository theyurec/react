import React, {useState} from 'react';
import './Card.css'
import CardsArray from "./CardsArray";

const Card = () => {
    const arr = [1,2,3,4,5,6]
    const [copy, setCopy] = useState(2)
    const [newArr, setNewArr] = useState([])
    const [btn, setBtn] = useState(true)

    const add = () => {
        if(arr.length === newArr.length) {
            setBtn(!btn)
        } else {
            const result = arr.slice(0, copy)
            setNewArr(result)
            setCopy(copy + 2)
        }

    }

    return (
        <div className="cards">
            <div className="first-card">
                <div className="cards-img"></div>
                <div className="cards_text">
                    <div className="date">MAR 23, 2022</div>
                    <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur culpa deleniti dignissimos dolore est, eveniet, excepturi fugiat harum inventore iste iusto labore nulla, praesentium quasi recusandae tempore vel veritatis.</div>
                </div>
            </div>
            <button className={`${btn ? '' : 'btn-none'}`} onClick={add}>Показать еще</button>

            <CardsArray newArr={newArr} copy={copy}/>

        </div>
    );
};

export default Card;