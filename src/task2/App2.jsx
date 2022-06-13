import '../App.css';
import {useState} from "react";


/*
    1. Сделать кнопку удалить все записи
    2. Сделать кнопку удалить текущую запись (на каждом элементе) filter
    3. Checkbox со статусом выполнено или нет, нужно сделать обработчик который, будет менять значение status
 */

function App2() {
    const [list, setList] = useState([])
    const [name, setName] = useState('')
    const [notChecked, setNotChecked] = useState(false);

    const handleAddNewItem = () => {
        const currentList = [...list, {id: list.length, name: name, status: false}]
        setList(currentList)
        setName('')
    }

    const handleAddNameTask = (event) => {
        setName(event.target.value)
    }

    const deleteAllItem = () => setList([])

    const deleteItem = (id) => {
        const deleteList = [...list].filter(item => item.id !== id)
        setList(deleteList)
    }

  return (
    <div className="App">
      <h1>TODOList app</h1>
        <ul>
            {list.map((item) => <li key={item.id || 100}>
                {<input type="checkbox" checked={notChecked} onChange={() => setNotChecked(!notChecked)} />}

                {item.status ? 'Выполнен' : 'Не выполнен'}
                {item.name || ''}
                {<button onClick={() => deleteItem(item.id)}>delete</button>}
            </li>)}


        </ul>
        <input type="text" value={name} onChange={handleAddNameTask}  />
        <button type="button" onClick={handleAddNewItem}>Добавить</button>
        <button type="button" onClick={deleteAllItem}>Удалить</button>
    </div>
  );
}

export default App2;
