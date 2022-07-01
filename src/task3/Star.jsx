
import './App3.css'

function Star({isMarked}) {

    return (

        <div className={`star ${isMarked ? 'is-active' : ''}`} style={{'borderBottomColor': isMarked ? '#FFFF00' : 'black'}} />


    )
}

export default Star;