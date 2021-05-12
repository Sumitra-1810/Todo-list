import React, { useState } from 'react';
import List from './list';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTrash} from '@fortawesome/free-solid-svg-icons'

library.add( faTrash)

const App=()=>
{
  
  const[input,setInput]=useState("");
  let[task,setTask]=useState([])
  const Input=(event)=>
  {
     setInput(event.target.value);
  }
  const Clicked=()=>
  {
    setTask((oldval)=>
    {
      return[...oldval,input];
    })
    setInput('');
  }
  const Delete=(id)=>
    {
        setTask((oldval)=>{
          return oldval.filter((arr,index)=>{
            return index!==id;
          })
        })

    }
  return(
    <>
    <div className="main">
      <div className="card">
        <br />
        <h1>Todo List</h1>
        <br/>
        <input type="text" placeholder="What you want to do"  onChange={Input} value={input}/>
        <button onClick={Clicked}>Add</button>

        
          {task.map((val,index)=>
          {
            return(
              
            <List
            key={index}
            id={index}
             text={val}
             onSelect={Delete}
            />
            )
          })}
          

        
      </div>
    </div>
    </>
  )
}
export default App;
