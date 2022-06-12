import React, { useState } from 'react';
import Login from "./Login";
import Password from "./Password";
import Modal from "./Modal";

function App() {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    console.log(isModalOpen === true)
    return <div>
        <Login login={login} setLogin={setLogin}/>
        <Password pass={pass} setPass={setPass}/>
        {/*<button onClick={() => setIsModalOpen(true)}>Показать результат</button>*/}
        {isModalOpen === true && <Modal login={login} pass={pass} setIsModalOpen={setIsModalOpen}/>}
    </div>
}
export default App;