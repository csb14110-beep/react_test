import React from 'react'
import { RiEdit2Fill } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const Todo = ({ task, deleteTodo, editTodo } ) => {

    console.log(task)
  return (
    <div className='flex justify-between items-center bg-slate-500 text-gray-300 py-3 px-4 rounded-md my-1'>
        <p className={task.isEdited ? 'underline' : ''}>{task.task}</p>
        <div>
            <RiEdit2Fill className='text-xl' onClick={() =>editTodo(task.id)}/>
            <IoMdTrash className='text-xl' onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo