import React from 'react'
import { useState } from 'react';
import Column from './Column'
import Input from './Input'
import { useContext, createContext } from 'react';
import { todo } from './todo';
import { InputContext } from '../App';

const headingLabel = ["Registered", "Progress", "Done"]


export const TodoContext = createContext({})

localStorage.setItem('todos', JSON.stringify(todo))
let todos = JSON.parse(localStorage.getItem('todos'))

function Board() {
    const [requested, setRequested] = useState(todos);
    const { dashboard, setDashboard, requireInput, setRequireInput } = useContext(InputContext)

  return (
    <TodoContext.Provider value={ {requested, setRequested} } >
      
      <div className='board'>
          {dashboard && <Column heading={headingLabel[0]} />}

          {dashboard && <Column heading={headingLabel[1]} />}

          {dashboard && <Column heading={headingLabel[2]} />}

          {requireInput && <Input setDashboard={setDashboard} setRequireInput={setRequireInput} />}
      </div>
    </TodoContext.Provider>
  )
}

export default Board