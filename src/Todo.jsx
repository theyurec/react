
import {useState} from "react";
import './todo.css'

function Todo() {
    const [list, setList] = useState([])
    const [name, setName] = useState('')


    const handleAddNewItem = () => {
        const currentList = [...list, {id: list.length, name: '', status: false}]
        setList(currentList)
        setName('')
    }

    const handleAddNameTask = (id) => (event) => {
        const result = [...list].map(elem => {
            if(elem.id === id) {
                return {...elem, name: event.target.value}
            }
            return elem
        })
        setList(result)
    }

    const deleteAllItem = () => setList([])

    const deleteItem = (id) => {
        const deleteList = [...list].filter(item => item.id !== id)
        setList(deleteList)
    }
    const handleChecked =  (id) => (event) => {
        const result = [...list].map(elem => {
            if(elem.id === id) {
                return {...elem, status: event.target.checked}
            }
            return elem
        })
        setList(result)
    }

    return (
        <div className="App">
            <h1>TODOList app</h1>

            <div>
                {list.map((item, index) => <div className="todo" key={`${item.id}-${index}`}>
                    <input type="checkbox" checked={item.status} onChange={handleChecked(item.id)} />
                    <input placeholder='Введите задачу...' type="text" value={item.name} onChange={handleAddNameTask(item.id)} className={`todo-text ${item.status ? 'todo-completed' : ''}`}/>
                    <button onClick={() => deleteItem(item.id)}>Х</button>
                </div>)}

            </div>

            <button type="button" onClick={handleAddNewItem}>Добавить</button><br/>
            <button type="button" onClick={deleteAllItem}>Удалить все</button>
        </div>
    );
}

export default Todo;