import React, { useEffect } from 'react';
import FormTodo from './FormTodo';
import Todo from './Todo';
import { nanoid } from '@reduxjs/toolkit';

function AppMain() {
    const [todos, setTodos] = React.useState([]);
    const id = nanoid()
    console.log({todos})

    useEffect(()=>{
      if(todos?.length){
        localStorage.setItem('todos', JSON.stringify(todos))
      }
    },[todos])
  
    useEffect(()=>{
      const savedTodo = localStorage.getItem('todos')
        if(savedTodo){
          setTodos(JSON.parse(savedTodo))
        }
    },[])
    
    const addTodo = text => {
      const newTodos = [...todos, { text, id}];
      console.log({newTodos})
      setTodos(newTodos);
    };
  
    const markTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isDone = !(newTodos[index].isDone);
      setTodos(newTodos);
      
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    const updateTodo = (id,text) =>{
      setTodos((prevState)=>{
        return prevState.map((todo) => {
          if (todo.id === id) {
            // Return a new object with updated text
            return { ...todo, text };
          }
          // Return the unchanged todo
          return todo;
        });
      })
    }

    return (
      <div className="p-[30px]">
        <div className="text-center">
          <h1 className="font-bold font-serif text-2xl">TODO LIST</h1>
          <p><b>Add tasks to your list and pressing the submit button . You may then view all pending and marked as done tasks below.</b></p>
        </div>
        <FormTodo addTodo={addTodo}/>
        <div>
          {todos.map((todo, index ) => (
            <div key={todo.id} className="bg-gray-50 border mt-2 border-gray-300 rounded-lg shadow-sm">
              <Todo
              key={todo.id}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
              updateTodo= {updateTodo}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  

  export default AppMain;