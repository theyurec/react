
// Сделать кнопку с выподающем меню через состояниями. Компонент принимает текст кнопки и массив подпунктов http://prntscr.com/qjm5z0


import React, {useState} from 'react';
import './List.css'
import ListText from "./ListText";

const List = () => {
    const list = ['Action', 'Another action', 'Something else here'];
    const btn = 'Кнопка выпадающего списка'
    const [isOpen, setIsOpen] = useState(false)

    const openList = () => {
        setIsOpen(!isOpen)
    }

    return <div>
       <button className='btn-list' onClick={openList}>{btn}</button>
        {isOpen && <ListText list={list}/>}
    </div>;
};

export default List;