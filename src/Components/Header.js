import React, {useContext, useState} from 'react'
import search from "../img/search.png"
import { InputContext } from "../App"
import { TodoContext} from "./Board"

function Header() {

  const { dashboard, setDashboard, requireInput, setRequireInput ,setSearchTerm } = useContext(InputContext)
  const { requested, setRequested} = useContext(TodoContext)

  function handleClick(e){
        e.preventDefault()
        setRequireInput(!requireInput)
        setDashboard(!dashboard)
  }

  function handleChange(e){
    e.preventDefault()
    // console.log(requested)
    // const search = requested.filter((request)=>request.content.includes(e.target.value))
    // console.log(search)
    // setSearchTerm(e.target.value)
    console.log(e.target.value)
    // searchterm context, states are already defined if need for adding search feature (future reference )
  }

  return (
    <>
    <div className='header'>
      <h1>Simply / DashBoard</h1>
      
    </div>
    <div className="search">
      <div className="input">
        <img src={search} className="search-icon" alt='search'/> 
        <input type="text" name='search' placeholder="Search(not implemented yet)" onChange={handleChange} disabled /> 
      </div>
      <a href="#" onClick={handleClick}><span>+</span> Add Item</a>
    </div>
    </>
  )
}

export default Header