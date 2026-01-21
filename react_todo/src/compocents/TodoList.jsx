import React, { useState } from 'react'
import Form from './Form'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import Edit from './Edit';
uuidv4();

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEdit: false, isEdited: false },
    ]);
  }

  const deleteTodo = (id) => {
    // 배열에서 id가 
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  }

  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) => todo.id === id ? { ...todo, isEdit: !todo.isEdit} : todo))
    
  }

  const editTask = (task, id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task: task, isEdit: false, isEdited: true } : todo
      )
    )
  }


  return (
    <div className='container'>
    <Form createTodo={ createTodo }/>

    {todoValue.map((todo, idx) => 
        todo.isEdit ? (
          <Edit key={idx} task={todo} editTask={editTask} />
        ) : (
          <Todo key={idx} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))
    }
    </div>
  )
}

export default TodoList