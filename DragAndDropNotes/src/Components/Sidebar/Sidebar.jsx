
import { useState } from 'react'
import AddIcon from '../../../Image/plusIcon.png'

const Sidebar = (props) => {

    const color = ["#fe9b72","#fec971","#00d4fe","#b693fd","#e4ee91"]
const [visible,setVisible]=useState(false)

    const handleClick=()=>{
        setVisible(!visible);
    }

  return (
    
    <div>
        <img className='cursor-pointer' src={AddIcon} alt="AddIcon" onClick={handleClick} />
        <ul >
           {color.map((items,index)=>(
            <li
            className={`  m-2 rounded-full transition-all duration-3000 ease-in-out ${visible ? 'h-8 w-8':'h-0 w-0'}`}
             key={index}
            style={{backgroundColor:items}}
            onClick={()=>props.addNote(items)}
            />
           ))}
        </ul>
    </div>
      

  )
}

export default Sidebar
