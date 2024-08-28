
import Notes from "../Notes/Notes"
const NotesContainer = (props) => {




  return (
    <>
        <h1 className="text-[40px]">Notes</h1>
        
        <div className="flex flex-wrap w-full  gap-[20px] h-[90%] overflow-y-scroll ">
{props.notes?.length>0 ? props.notes.map((items)=>(
    <Notes
    
    key={items.id}
    notes={items}
    deleteNote={props.deleteNote}
    updateText={props.updateText}
    />
  )): <h3>No Notes Present</h3>
}

       
        </div>
    </>
  )
}

export default NotesContainer
