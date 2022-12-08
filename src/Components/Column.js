import React from 'react'
import { useDrop } from "react-dnd"
import { useContext } from "react"
import List from './List'
import { TodoContext } from './Board'
import {InputContext} from "../App"


function Column({ heading }) {

    const { requested, setRequested} = useContext(TodoContext)
    const { dashboard, setDashboard, requireInput, setRequireInput, searchTerm } = useContext(InputContext)

    const [ {isOver, didDrop}, drop ] = useDrop(()=>({
        accept:"issue",
        drop: (item, monitor)=>changeStatus(item.request),
        collect: (monitor)=>({
            isOver: !!monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true })
        })
    })
    );

    const changeStatus = (item)=>{
        const task = requested.filter((request)=> request.id === item.id);
        task[0].status = heading.toLowerCase()
        setRequested(requested.filter((request)=> request.id !== item.id).concat(task[0]))
    }

    function handleClick(e){
        e.preventDefault()
        setRequireInput(!requireInput)
        setDashboard(!dashboard)
    }
   
  return (
    <>
        <div className="col">
            <h3>{heading}</h3>
            <div ref={drop} className="section">
                {/* {searchTerm && <List requested={searchTerm} heading={heading} />} */}
                {requested && <List requested={requested} heading={heading} />}
            </div>
            <div className='add-item'>
                <a href='#' onClick={handleClick} >+ Add Items</a>
            </div>
        </div>
    </>
  )
}

export default Column