import React, {useContext} from 'react'
import { useDrag } from "react-dnd"
import del from "../img/delete.png"
import { TodoContext } from "./Board"



function Issue({request}) {

  const { requested, setRequested} = useContext(TodoContext)

  const [ {isDragging}, drag] = useDrag({
    type:"issue",
    item: {request:request},
    collect: (monitor)=>({
      isDragging: !!monitor.isDragging()
    })
  })
  
  function addClass(status){
    if (status==="progress"){
      return "progress additional"
    } else if (status==="done") {
      return "done additional"
    } else{
      return "issue additional"
    }
  }

  function deleteCard(id){
    const task = requested.filter((request)=> request.id !== id);
    setRequested(task)
  }

  return (
    <div 
      ref={drag} 
      className={addClass(request.status)}
      >
        
        <h4 >{request.content}</h4>
        <img src={del} onClick={()=> deleteCard(request.id)} className="delete" alt="delete" />
        </div>
  )
}

export default Issue