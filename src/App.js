// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import {AddTodo} from "./AddTodo";

function App() {
  
  const [taskName, settaskName] = useState("");
  const [taskList, settaskList] = useState([]);

  const handleSubmit = (event) =>
  {
    event.preventDefault()
    if (taskName==="") {
      alert("Please enter the task")
      return
    }
    let newtakList = [...taskList,{task : taskName}]
    settaskList(newtakList)
    settaskName("")
    // console.log(taskList)
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Entert Task Here"
              value={taskName}
              onChange={(e) => {
                  settaskName(e.target.value)               
              }}
            />
  
          </div>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
        <p>
          <AddTodo taskList={taskList} settaskList={settaskList}/>
        </p>
      </header>
    </div>
  );
}

export default App;
