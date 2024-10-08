/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, SelectInput, SelectIsEdit } from "../TodoSlice";

const Task = ({ id, task, isComplete }) => {
  const isEdit = useSelector(SelectIsEdit);
  const input = useSelector(SelectInput);

  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(editTodo(id));
    console.log(isEdit);
    
  };

  return (
    <li
      className={`flex items-center text-
        lg border rounded-md ${isComplete && "bg-gray-200 "}`}
    >
      <span className="flex items-center gap-4 flex-1 p-4">
        <div
          className={`w-4 h-4 rounded-full cursor-pointer ${
            isComplete ? "bg-green-400" : "bg-gray-400 "
          }`}
        ></div>
        <div className="w-full">
          {isEdit ? (
            <input type="text" value={input} className="border text-xl" />
          ) : (
            <p className={`${isComplete && "text-gray-500"} text-xl`}>{task}</p>
          )}
        </div>
      </span>

      <span className="flex gap-6 p-4">
        <button
          disabled={isComplete}
          onClick={
            editHandler
            //     () => {
            //     if(isEdit&&text){
            //         editUpdateHandler(id,text)
            //         setText("")
            //     }
            //     setIsEdit(!isEdit)
            //  }
          }
        >
          {isEdit ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-pen"></i>
          )}
        </button>

        <button onClick={() => dispatch(deleteTodo(id))}>
          <i className="fa-solid fa-trash cur"></i>
        </button>
      </span>
    </li>
  );
};

export default Task;
