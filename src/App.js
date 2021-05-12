import "./App.css";
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }  

  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;

    }))
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

    const addTodo = (Title, Description) => {
      console.log("I am adding this todo", Title, Description)
      let SNo;
      if (todos.length === 0) {
        SNo = 0;
      }
      else {
        SNo = todos[todos.length - 1].SNo + 1;
      }
      const myTodo = {
        SNo: SNo,
        Title: Title,
        Description: Description,
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    }
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

  return (
    <>
    <Router>
      <Header title="My Todos List"/>
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
           <AddTodo addTodo={addTodo}/>
           <Todos todos={todos} onDelete={onDelete}/>
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 

     
      
      <Footer/>
      </Router>  
    </>
  );
}

export default App;
