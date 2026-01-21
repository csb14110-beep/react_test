import React, { useState } from 'react'

const Form = ({ createTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); //기본 디폴트 디자인 막음
        createTodo(value);
        setValue('');
    }
    return (
        <form className='font-primary flex' onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='할 일을 입력하세요.'
            className='outline-none bg-transparent border border-gray-500 p-1 w-[80%] text-gray-600 rounded placeholder:text-gray-400'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />

            <button className='bg-gray-700 border-none p2 text-gray-300 rounded ml-2 w-[20%]'>할일 추가</button>
        </form>
  )
}

export default Form