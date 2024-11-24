import React, { useState } from "react";
import {DeleteForever, EditNote, StrikethroughSOutlined} from '@mui/icons-material'
import EditPopup from "./EditPopup";

function Todo({ todo, index, markTodo, removeTodo, updateTodo }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    return (
      
        <div className="flex items-center justify-between p-2 px-6 my-2 bg-antiquewhite text-[17px] rounded-[20px]">
          <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
          <div className="todo-buttons">
            <EditNote
              onClick={() => {
                handleOpen() 
              }}
              variant="outline-danger"
              className="text-blue-500 hover:text-blue-700  cursor-pointer transition"
            /> 
            <StrikethroughSOutlined className="text-green-700 text-base cursor-pointer" variant="outline-success" onClick={() => markTodo(index)}/>
            <DeleteForever className="text-red-600 text-base cursor-pointer" variant="outline-danger" onClick={() => removeTodo(index)}/>       
            <EditPopup open={open} setOpen={setOpen} item={todo} updateItem = {updateTodo}/>
        </div>
        </div>
      
    );
  }

  export default Todo;