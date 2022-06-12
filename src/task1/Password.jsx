import React, { useState } from 'react';

function Password() {
    const [password, setPassword] = useState('password')
    return <div>
        <input type="password" onChange={(event) => setPassword(event.target.value)}/>
        <p>{password}</p>
    </div>
}
export default Password;