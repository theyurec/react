import './modal.css'

function Modal({login, pass, setIsModalOpen}) {
    return <div id='modal'>
            <div className='modal_window'>
                {login} <br/>
                {pass} <br/>
                <button onClick={() => setIsModalOpen(false)} type="button" className="close">Закрыть окно</button>
            </div>
        </div>
}
export default Modal;