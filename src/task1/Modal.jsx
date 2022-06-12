import React, { useState } from 'react';

function Modal() {

    return <div>
            <div id="okno">
                Всплывающее окошко!<br />
                <a href="#" className="close">Закрыть окно</a>
            </div>
        <a href="#zatemnenie">Вызвать всплывающее окно</a>
    </div>
}
export default Modal;