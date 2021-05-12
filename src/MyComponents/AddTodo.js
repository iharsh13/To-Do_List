import React, { useState } from 'react';


export const AddTodo = ({addTodo}) => {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!Title || !Description) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(Title, Description);
            setTitle("");
            setDescription("");
        }
    }
    return (
       <div className="container my-3">
           <h3>Add a todo</h3>
        <form onSubmit = {submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title </label>
          <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter what task is to be done?" className="form-control" id="title" aria-describedby="emailHelp"/>
         
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">Todo Description</label>
          <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)}placeholder="How is that task gonna look?" className="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">Submit</button>
        </form>
     </div>
    )
}
