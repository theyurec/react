

function Login({login, setLogin}) {
    return <div>
        <input type="text" value={login} onChange={(event) => setLogin(event.target.value)}/>
        <p>{login}</p>
    </div>
}
export default Login;