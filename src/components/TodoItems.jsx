import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";


const TodoItems = ({text}) => {
    return (
        <div className='flex flex-col w-full justify-center items-center mt-6'>
            <div className="flex flex-row w-8/10  items-center justify-between ">
                <div className="flex flex-row items-center ">
                    <MdOutlineCheckBox className='text-3xl text-orange-400 mr-2 ' />
                    <p className="">{text}</p>
                </div>
                <FaTrashAlt className='hover:text-red-700 transition-all duration-200 text-l self-center ' />
            </div>
        </div>
    )
}

export default TodoItems