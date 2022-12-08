import './App.css';
// import DragDrop from './Components/DragDrop';
import Board from './Components/Board';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import {useState, createContext} from "react"

export const InputContext = createContext({})

function App() {

  const [ requireInput, setRequireInput] = useState(false)
  const [dashboard, setDashboard]= useState(true)
  const [searchTerm, setSearchTerm] = useState('')

    
  return (
    <DndProvider backend={ HTML5Backend } >
      <InputContext.Provider value={ { dashboard, setDashboard, requireInput, setRequireInput, searchTerm, setSearchTerm}}>
        <div className="App">
          <div className="navbar">
            <NavBar setDashboard={setDashboard} setRequireInput={setRequireInput}  />
          </div>
          <div className="main">
            <Header setDashboard={setDashboard} setRequireInput={setRequireInput}  />
            <Board setDashboard={setDashboard} setRequireInput={setRequireInput}  />
          </div> 
        </div>
      </InputContext.Provider>
    </DndProvider>
  );
}

export default App;
