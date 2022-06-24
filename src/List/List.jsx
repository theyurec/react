import React, {useState} from 'react';
import './List.css'
import ListText from "./ListText";

const List = () => {
    const list = ['Action', 'Another action', 'Something else here'];
    const [selected, setSelected] = useState('Кнопка выпадающего списка')
    const [isOpen, setIsOpen] = useState(false)

    const openList = () => {
        setIsOpen(!isOpen)
    }

    return <div>
       <button className='btn-list' onClick={openList}>{selected}</button>
        {isOpen && <ListText list={list}/>}
    </div>;
};

export default List;