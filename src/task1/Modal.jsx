import './modal.css'
import App from "./App";

function Modal({login, pass, setIsModalOpen}) {
    console.log(setIsModalOpen)
    return <div id='modal'>
            <div className='modal_window'>
                {login}
                {pass}
                <button type="button" className="close">Закрыть окно</button>
            </div>
        </div>
}
export default Modal;