import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
  return (
    <div className="container" style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          " No Todos to display" :{" "}
        </div>
      ) : (
        props.todos.map((todo) => {
          return (
             
            <TodoItem todo={todo} key={todo.SNo} onDelete={props.onDelete} /> 
              
          );
        })
      )}
    </div>
  );
};
