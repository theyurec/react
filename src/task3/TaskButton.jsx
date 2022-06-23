import React, {useState} from 'react';

const TaskButton = () => {
    const [text, setText] = useState(true)
    const [btn, setBtn] = useState(true)

    const change = () => {
        setText(!text)
        setBtn(!btn)
    }

    return (
        <div>

            <button onClick={change}>
                {btn ? 'Скрыть' : 'Показать'}
            </button>

            <p>
                {text ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ipsum obcaecati quas quisquam.' : ''}
            </p>

        </div>
    );
};

export default TaskButton;