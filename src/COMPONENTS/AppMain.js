import React from 'react';
import FormTodo from './FormTodo';
import Todo from './Todo';
import { Card } from 'react-bootstrap';

function AppMain() {
    const [todos, setTodos] = React.useState([
     
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const markTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isDone = true;
      setTodos(newTodos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div className="app">
        <div className="container">
          <h1 className="app-list">TODO LIST</h1>
          <p><b>Add tasks to your list and pressing the submit button . You may then view all pending and marked as done tasks below.</b></p>
          </div>
          <FormTodo addTodo={addTodo}/>
          <div>
            {todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
       
      </div>
    );
  }
  

  export default AppMain;