import React, {useContext} from 'react'
import {TodoContext} from "./Board"
import uuid from 'react-uuid'

function Input({setDashboard, setRequireInput}) {

    const { requested, setRequested} = useContext(TodoContext)

    function handleSubmit(e){
        let newData = {
            id: uuid(),
            content: e.target[0].value,
            status: e.target[1].value
        }
        setRequested(requested.concat(newData))
        setRequireInput(false)
        setDashboard(true)
    }
    
  return (
    <div className='input-popup'>
        <h1>Add a New Item</h1>
        <form action="#" onSubmit={handleSubmit}>
            <input type="text" name='item' placeholder='type description in short' required />
            <select name="status" id="status" required >
                <option value="registered">Registered</option>
                <option value="progress">Progress</option>
                <option value="done">Done</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Input