

function Login({login, setLogin}) {
    return <div>
        <input type="text" value={login} onChange={(event) => setLogin(event.target.value)}/>
    </div>
}
export default Login;