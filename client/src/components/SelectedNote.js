import * as Icon from 'react-bootstrap-icons'
import { useState } from 'react'
const SelectedNote = ({selectedNote, setSelectedNote}) =>{
    const {title, text} = selectedNote
    const [editing, setEditing] = useState(false)
    console.log(selectedNote);
    return(
        <section className="w-100 d-flex flex-column align-items-start">
            <div className="d-flex">
                <button onClick={_ => setSelectedNote(null)} className={`btn-main ${editing ? "d-none" : ""}`}> <Icon.ArrowLeft/> </button>
                <button onClick={_ => setEditing(p => !p)} className="btn-main"> { editing ? <Icon.XCircleFill/> : <Icon.PencilFill/>} </button>
            </div>
            <h5> {title} </h5>
            <p> {text} </p>
        </section>
    )
}

export default SelectedNote