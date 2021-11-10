import './App.css';
import * as Icon from 'react-bootstrap-icons'
import axios from 'axios'
import { useState, useEffect } from 'react';


//Componentes:
import NotesList from './components/NotesList'
import Form from './components/Form'
import SelectedNote from './components/SelectedNote'



function App() {
  const [isModalOn, setModalOn] = useState(false)
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [searchingValue, setSearchingValue] = useState("")

  useEffect(() => {
    axios.get("/api/notes")
    .then(res => setNotes(res.data.notes))
  }, [])

  //Funciones:
  const submit = newNote =>{
    console.log(newNote);
    axios.post("/api/notes",  newNote)
    .then(res => setNotes([...notes, res.data]))
  }

  return (
    <main className="main mt-3">
      <section className="searchSection">
        <Icon.Search/>
        <input type="search" value={searchingValue} onChange={e => setSearchingValue(e.target.value)}></input>
      </section>
      <section className="btnSection">
        <button onClick={_ => setModalOn(true)} className="btn-main"> <Icon.Plus/> </button>
        <button className="btn-main"> <Icon.CardList/> </button>
      </section>

      {selectedNote ? <SelectedNote selectedNote={selectedNote} setSelectedNote={setSelectedNote} />: <NotesList searchingValue={searchingValue} notes={notes} setSelectedNote={setSelectedNote} />}

      <Form submit={submit} isModalOn={isModalOn} setModalOn={setModalOn} />
    </main>
  );
}

export default App;
