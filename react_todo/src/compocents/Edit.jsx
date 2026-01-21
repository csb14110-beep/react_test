import React, { useState } from 'react'

const Edit = ({task, editTask}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id)
        setValue('');
    }
  return (
    <form className='font-primary flex my-2' onSubmit={handleSubmit}>

        <input type="text"
          placeholder='수정할 내용을 입력해 주세요'
          className='outline-none bg-transparent border border-gray-500 p-1 w-[80%] text-gray-600 rounded placeholder:text-gray-400' 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
          <button className='bg-gray-700 border-none p2 text-gray-300 rounded ml-2 w-[20%]'> 수정 하기</button>
    </form>
  )
}

export default Edit