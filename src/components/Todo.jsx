import React from 'react'
import { RiCalendarTodoLine } from "react-icons/ri";
import TodoItems from './TodoItems';
const Todo = () => {
    return (
        <div className='w-7/10 max-w-80 h-100 text-black bg-gray-100 rounded-2xl flex flex-col items-center'>
            <div className="flex flex-row w-full h-20  items-end ">
                <RiCalendarTodoLine className='ml-5 text-2xl' />
                <h1 className="text-xl ml-1">
                    To-Do List 
                </h1>
            </div>
            <div className="flex flex-row w-fit h-15 mt-3  items-center justify-center relative self-center ">
                <input className='w-68  rounded-4xl h-10 bg-gray-300 -p-2 border focus:border-gray-500 pl-2' type="text" placeholder=' Add Your Task' />
                <button className=' absolute bg-amber-800 hover:shadow-5xl hover:shadow-amber-800 transition-all duration-100 cursor-pointer h-10 rounded-4xl right-0 w-20 text-white' >ADD + </button>
            </div>
            <TodoItems text={'learn coding with mina'}/>
        </div>
    )
}

export default Todo