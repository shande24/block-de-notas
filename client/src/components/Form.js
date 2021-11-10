import { useState } from "react"

const basicValue ={title:"", text:""}

const Form = ({submit, isModalOn, setModalOn}) =>{
    const [newNote, setNewNote] = useState(basicValue)
    
    const handleSubmit = e =>{
        e.preventDefault()
        if(newNote.title !== "" && newNote.text !== "") { 
            submit(newNote)
            setNewNote(prev => ({...prev, text:"", title:""}))
        }
        else alert("Falta titulo o texto!")
        
    }

    const closeModal = e => e.target.classList[0] === "formModal" && setModalOn(false)

    return(
        <section onClick={e => closeModal(e)} className={`formModal ${isModalOn ? "" : "d-none"}`}>
            <div className="formModalCard">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input onChange={e => setNewNote(prev => ({...prev, title:e.target.value}))} value={newNote.title} placeholder="Title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleInputPassword1" class="form-label">Text</label>
                        <textarea onChange={e => setNewNote(prev => ({...prev, text:e.target.value}))} value={newNote.text} placeholder="Text" class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="d-flex  alig-items-center justify-content-center gap-5"> 
                    <button type="submit" class="btn btn-primary">Create</button>
                    <button onClick={_ => setModalOn(false)} type="button" class="btn btn-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form