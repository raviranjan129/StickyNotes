import { useEffect, useState } from 'react'
import './App.css'
import NotesContainer from './Components/NotesContainer/NotesContainer'
import Sidebar from './Components/Sidebar/Sidebar'


function App() {

  const [notes,setNotes]= useState(JSON.parse(localStorage.getItem("notes")))
  const addNote=(color)=>{
const tempNotes=[...notes];
tempNotes.push({
  id:Date.now() + "" + Math.floor(Math.random()*78),
  text:"",
  time:Date.now(),
  color,
})
setNotes(tempNotes)
  }

const deleteNote=(id)=>{
  const tempNotes=[...notes]
  const index=tempNotes.findIndex(items=>items.id===id)
  if(index<0){
    return;
  }
  tempNotes.splice(index,1);
  setNotes(tempNotes)
}

useEffect(()=>{
  localStorage.setItem('notes',JSON.stringify(notes))
},[notes])

const updateText=(text,id)=>{
const tempNotes=[...notes]
const index=tempNotes.findIndex((items)=>items.id===id)
if(index <0){
  return
}
tempNotes[index].text=text;
setNotes(tempNotes)
}


  return (
    <div className='h-[100vh] flex gap-[40px] p-[40px] '>
      <Sidebar addNote={addNote}  />
    <NotesContainer 
    notes={notes}
    deleteNote={deleteNote}
    updateText={updateText}
    />
    </div>
  )
}

export default App
