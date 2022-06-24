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