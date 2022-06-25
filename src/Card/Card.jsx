
// Подгрузка карточек по кнопке (Компонт Card), передаем массив карточек, выводим только 2. При клике на кнопку "Показать ещё" при клике на которую показываются ещё 2 шт. Если все карточки подгрузились, то кнопка "Показать ещё" пропадает.
//     https://www.figma.com/file/MuXnKBrSzZdAdOrnLemzPC/Blog---Personal-Website-(Community)?node-id=2%3A3 - дизайн, выводим по 2 карточки https://prnt.sc/EdYCpXJhkLjs

import React, {useState} from 'react';
import './Card.css'
import CardsArray from "./CardsArray";

const Card = () => {
    const arr = [1,2,3,4,5,6]
    const [count, setCount] = useState(2)
    const [newArr, setNewArr] = useState([])
    const [btn, setBtn] = useState(true)

    const add = () => {
        if(arr.length === newArr.length) {
            setBtn(!btn)
        } else {
            const result = arr.slice(0, count)
            setNewArr(result)
            setCount(count + 2)
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

            <CardsArray newArr={newArr} count={count}/>

        </div>
    );
};

export default Card;