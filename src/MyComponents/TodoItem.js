import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4 >{todo.Title}</h4>
            <p>{todo.Description}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>  Delete</button>
        </div>
        <hr />
        </>
    )
}
