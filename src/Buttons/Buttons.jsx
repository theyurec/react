// 1. Добавить кнопку и параграф с текстом, по умолчанию на кнопке текст "Скрыть" и блок с текстом виден. Когда мы нажимаем на кнопку, текст          меняется на "Показать" и текст ниже пропадает.
// 2. Добавь кнопку, которая будет увеличивать countSecond на 1, но ниже выводите ещё текст в параграфе:
//     "Count меньше 10" или "count больше 10" (для этого нужно использовать тернарный оператор
// 3. Создать новое состояние countThird, и две кнопки, одна прибавляет значение на 1, а другая уменьшает на 1
// 4. Создать новое состояние countFourth, и три кнопки, одна увеличивает на 1, другая на 5, третья на 10, четверная умножается сама на себя


import React, {useState} from 'react';
import Paragraph from "./Paragraph";

const Buttons = () => {
    const [countSecond, setCountSecond] = useState(0);
    const [countThird, setCountThird] = useState(0);
    const [countFourth, setCountFourth] = useState(0);

    const count = () => setCountSecond(countSecond + 1)
    const plus1 = () => setCountThird(countThird + 1)
    const minus1 = () => setCountThird(countThird - 1)

    const plus = (num) => () => setCountFourth(countFourth + num)
    const square = () => setCountFourth(countFourth * countFourth)


    return (
        <div>
            <Paragraph/><hr/>

            <b>{countSecond}</b><br/>
            <button onClick={count}>Увеличить</button><br/>
            <p>{countSecond <= 10 ? "Count меньше 10" : "Count больше 10"}</p><hr/>

            <b>{countThird}</b><br/>
            <button onClick={minus1}>-</button>
            <button onClick={plus1}>+</button><hr/>

            <b>{countFourth}</b><br/>
            <button onClick={plus(1)}>+1</button>
            <button onClick={plus(5)}>+5</button>
            <button onClick={plus(10)}>+10</button>
            <button onClick={square}>Квадрат</button>

        </div>
    );
};

export default Buttons;