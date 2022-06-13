

function Password({pass, setPass}) {
    return <div>
        <input type="password" value={pass} onChange={(event) => setPass(event.target.value)}/>
    </div>
}
export default Password;