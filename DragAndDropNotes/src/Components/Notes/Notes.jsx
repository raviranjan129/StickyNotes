import DeleteImage from '../../../Image/deleteIcon.png'

let timer=500,timeout

const Notes = (props) => {
    const formatDate=(value)=>{
        if(!value){
            return ""
        }
        const date = new Date(value)
        const monthNames=[
            'Jan','Feb','March','April','May','Jun','July','August','Sept','Oct','Nov','Dec'
        ]
        let hrs = date.getHours()
        let amPm=hrs>12?"PM":"AM"
        hrs=hrs?hrs:"12" //00 false
        hrs=hrs>12? (hrs=24-hrs) : hrs

        let min = date.getMinutes()
        min=min<10?'0'+ min:min
        let day = date.getDate()
        const month=monthNames[date.getMonth()]

        return `${hrs}:${min} ${amPm} ${day} ${month}`;
    }

    //debounce-> not render on fast typing in textarea ( in a timer);
    const debounce=(func)=>{
        clearTimeout(timeout)
        timeout=setTimeout(func,timer)
    }

    const updateText=(text,id)=>{
        debounce(()=>props.updateText(text,id))
    }

  return (
    <>
    
      <div className="flex flex-col bg-purple-500 h-[280px] w-[260px] p-[25px] rounded-xl m-5  " style={{backgroundColor:props.notes.color}}  >
        <textarea onChange={(e)=>updateText(e.target.value,props.notes.id)} className="flex basis-[75%] bg-transparent border-none outline-none resize-none  " defaultValue={props.notes.text} />
       <div className='flex items-center justify-between'>
       <p>{formatDate(props.notes.time)}</p>
       <img className='h-10 cursor-pointer' src={DeleteImage} alt="delete" onClick={()=>props.deleteNote(props.notes.id)} />
       </div>
      </div>
    </>
  )
}

export default Notes
