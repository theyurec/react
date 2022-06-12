import React, { useState } from 'react';

function Login() {
    const [login, setLogin] = useState('login')
    return <div>
        <input type="text" onChange={(event) => setLogin(event.target.value)}/>
        <p>{login}</p>
    </div>
}
export default Login;