import { useState, useEffect } from "react"

const NotesList = ({notes, setSelectedNote, searchingValue}) =>{
    const [searchedNotes, setSearchedNotes] = useState([])
    useEffect(() => {
        notes.forEach(note => {
            let newSearchedNotes = []
            if(searchingValue.includes(note.title) && searchingValue !== ""){
                 newSearchedNotes.push(note)
                 setSearchedNotes(newSearchedNotes)
            }else{
                setSearchedNotes(notes)
            }
            
        });
    }, [searchingValue, notes, searchedNotes])

    return(
        <section className="notesSection overflow-auto">
            {searchedNotes.map(note => (
                <div onClick={_ => setSelectedNote({text:note.text, title:note.title})} className="note"> {note.title} </div>
            )
            )}
        </section>
    )
}

export default NotesList