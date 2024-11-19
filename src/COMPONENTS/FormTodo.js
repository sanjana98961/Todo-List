import React from "react";
import { Button, Form } from 'react-bootstrap';

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
        <div className="formtodo">
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Task</b></Form.Label>
        <Form.Control type="text" className="formtodo-input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add New Task . . . . ." />
        <Button className="formtodo-submit" variant="primary mb-3" type="submit">
       <b>Submit</b> 
      </Button>
      </Form.Group>
      
    </Form>
    </div>
    );
  }
  
  export default FormTodo;