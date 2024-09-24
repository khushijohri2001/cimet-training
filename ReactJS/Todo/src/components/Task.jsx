import React, { useState } from 'react'

const Task = ({ input, taskCompleteHandler, deleteHandler,editUpdateHandler}) => {
    
    const { id, task, complete } = input;
    let [isEdit,setIsEdit]=useState(false)
    let [text,setText]=useState(task)
    
    return (
        <li className={`flex items-center text-
        lg border rounded-md ${complete && "bg-gray-200 "}`}>
            <span className='flex items-center gap-4 flex-1 p-4'
            >
                <div className={`w-4 h-4 rounded-full cursor-pointer ${complete ? "bg-green-400" : "bg-gray-400 "}`} onClick={() => taskCompleteHandler(id)}
                ></div>
                <div className='w-full'>
                    {isEdit ?
                        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className='border text-xl' />
                        :
                        <p className={`${complete && "text-gray-500"} text-xl`}>{task}</p>
                    }
                </div>
            </span>

            <span className='flex gap-6 p-4'>
                 <button disabled={complete} onClick={() => {
                    if(isEdit&&text){
                        editUpdateHandler(id,text)
                        setText("")
                    }
                    setIsEdit(!isEdit)
                 }}>
                 {isEdit ?  <i className="fa-solid fa-check"></i> :  <i className="fa-solid fa-pen"></i> }
                </button>
                <button >
                    <i className="fa-solid fa-trash cur" onClick={() => deleteHandler(id)}></i>
                </button>
            </span>
        </li>
    )
}

export default Task