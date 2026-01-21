import React from 'react'
import { RiEdit2Fill } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { FaCheck, FaRegCircle } from "react-icons/fa";


const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div
      className={`flex justify-between items-center py-3 px-4 rounded-md my-1 ${
        task.isCompleted ? 'bg-slate-700 text-gray-500' : 'bg-slate-500 text-gray-300'
      }`}
    >
      <div className='flex items-center gap-x-3'>
        <button onClick={() => toggleComplete(task.id)}>
         {
          task.isCompleted ? <FaCheck className='text-green-400' /> : <FaRegCircle />
         }
        </button>
      <p className={task.isCompleted ? 'line-through' : ''}>{task.task}</p>
      </div>
      <div className='flex items-center gap-x-4'>
        <RiEdit2Fill className='text-xl' onClick={() => editTodo(task.id)} />
        <IoMdTrash className='text-xl' onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}


export default Todo



