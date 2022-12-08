import React from 'react'
import { useContext } from 'react'
import dashboards from "../img/dashboard.png"
import add from "../img/add.png"
import { InputContext } from '../App'

function NavBar() {

    const { dashboard, setDashboard, requireInput, setRequireInput } = useContext(InputContext)

    function handleClick(e){
        e.preventDefault()
        setDashboard(!dashboard)
        setRequireInput(!requireInput)
    }

  return (
    <>
    <nav>
        <div className='heading'>
            <h1>Simply Kanban Board</h1>
        </div>
        <div className="sidebar">
            <div className="navigation">
                <img src={dashboards} alt="dashboard"></img>
                <a href="#">Dashboard</a>
            </div>
            <div className="navigation">
                <img src={add} alt='add'></img>
                <a href="#" onClick={handleClick} >Add Item</a>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar