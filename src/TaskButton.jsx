// 1. Добавить кнопку и параграф с текстом, по умолчанию на кнопке текст "Скрыть" и блок с текстом виден. Когда мы нажимаем на кнопку, текст          меняется на "Показать" и текст ниже пропадает.
// 2. Добавь кнопку, которая будет увеличивать countSecond на 1, но ниже выводите ещё текст в параграфе:
//     "Count меньше 10" или "count больше 10" (для этого нужно использовать тернарный оператор
// 3. Создать новое состояние countThird, и две кнопки, одна прибавляет значение на 1, а другая уменьшает на 1
// 4. Создать новое состояние countFourth, и три кнопки, одна увеличивает на 1, другая на 5, третья на 10, четверная умножается сама на себя


import React, {useState} from 'react';

const TaskButton = () => {
    const [text, setText] = useState(true)
    const [btn, setBtn] = useState(true)
    const [countSecond, setCountSecond] = useState(0);
    const [countThird, setCountThird] = useState(0);
    const [countFourth, setCountFourth] = useState(0);

    const change = () => {
        setText(!text)
        setBtn(!btn)
    }
    const count = () => setCountSecond(countSecond + 1)
    const plus = () => setCountThird(countThird + 1)
    const minus = () => setCountThird(countThird - 1)

    const plus1 = () => setCountFourth(countFourth + 1)
    const plus5 = () => setCountFourth(countFourth + 5)
    const plus10 = () => setCountFourth(countFourth + 10)
    const square = () => setCountFourth(countFourth * countFourth)


    return (
        <div>

            <button onClick={change}>
                {btn ? 'Скрыть' : 'Показать'}
            </button>

            <p>
                {text ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ipsum obcaecati quas quisquam.' : ''}
            </p>
            <hr/>

            <b>{countSecond}</b><br/>
            <button onClick={count}>Увеличить</button><br/>
            <p>{countSecond <= 10 ? "Count меньше 10" : "Count больше 10"}</p>
            <hr/>
            <b>{countThird}</b><br/>
            <button onClick={minus}>-</button>
            <button onClick={plus}>+</button>
            <hr/>
            <b>{countFourth}</b><br/>
            <button onClick={plus1}>+1</button>
            <button onClick={plus5}>+5</button>
            <button onClick={plus10}>+10</button>
            <button onClick={square}>Квадрат</button>


        </div>
    );
};

export default TaskButton;