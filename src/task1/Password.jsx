

function Password({pass, setPass}) {
    return <div>
        <input type="password" value={pass} onChange={(event) => setPass(event.target.value)}/>
        <p>{pass}</p>
    </div>
}
export default Password;