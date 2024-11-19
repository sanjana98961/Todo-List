import React from "react";

import { Button } from 'react-bootstrap';

function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      
        <div className="todo-list">
        
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        
        <div className="todo-buttons">
      
          <Button id="todo-check-button" variant="outline-success" onClick={() => markTodo(index)}><b> ✓ </b></Button>{' '}
          <Button id="todo-delete-button" variant="outline-danger" onClick={() => removeTodo(index)}><b> ✕ </b></Button>
 
        </div>
        </div>
      
    );
  }

  export default Todo;