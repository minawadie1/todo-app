import React,{useEffect, useRef} from 'react'
import { RiCalendarTodoLine } from "react-icons/ri";
import TodoItems from './TodoItems';
import { useState } from 'react';
const Todo = () => {
    const InputRef = useRef();
    const getInitialTodos = () => {
    try {
        const stored = localStorage.getItem('todoItems');
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
  };
    const [todoItems, setTodoItems] = useState(getInitialTodos);
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAdd();
        }
    };
    const handleAdd = () => {
        const inputValue = InputRef.current.value;
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(), 
                isFinited: false, 
                text: inputValue 
            };
            setTodoItems((prev) => [...prev, newTodo]);

            InputRef.current.value = ''; 
        } else {
            alert("Please enter a valid task!");
        }
    };
    const handledeleteitem = (id) => {
        setTodoItems((prev) => prev.filter(item => item.id !== id));
    };
    const handleToggleComplete = (id) => {
        setTodoItems((prev) =>
            prev.map(item =>
                item.id === id ? { ...item, isFinited: !item.isFinited } : item
            )
        );
    };
    useEffect(() => {
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }, [todoItems]);

    return (
        <div className='w-9/10 max-w-90 h-130 text-black bg-gray-100 rounded-2xl flex flex-col items-center'>
            <div className="flex flex-row w-full h-20  items-end ">
                <RiCalendarTodoLine className='ml-5 text-2xl' />
                <h1 className="text-xl ml-1">
                    To-Do List 
                </h1>
            </div>
            <div className="flex flex-row w-fit h-15 mt-3  items-center justify-center relative self-center " >
                <input className='w-68  rounded-4xl h-10 bg-gray-300 -p-2 border focus:border-gray-500 pl-2' type="text" placeholder=' Add Your Task' ref={InputRef} onKeyDown={handleKeyPress}/>
                <button className=' absolute bg-amber-800 hover:shadow-5xl hover:shadow-amber-800 transition-all duration-100 cursor-pointer h-10 rounded-4xl right-0 w-20 text-white' onClick={()=>{handleAdd()}} >ADD + </button>
            </div>
            <div className='flex flex-col w-full h-80 overflow-y-auto mt-6 pb-8' >
                {
                    todoItems?.map((item,index) => (
                        <TodoItems key={index} text={item.text} isdone={item.isFinited} id={item.id} deletitem={handledeleteitem}  toggletaskcomplete={handleToggleComplete}/>
                    ))
                }
            </div>
        </div>
    )
}


export default Todo