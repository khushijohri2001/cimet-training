/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, SelectEditId, SelectEditInput, SelectIsEdit, setEditInput, updateTodo } from "../TodoSlice";

const Task = ({ id, task, isComplete }) => {
  const isEdit = useSelector(SelectIsEdit);
  const editId = useSelector(SelectEditId)
  const editInput = useSelector(SelectEditInput)

  const dispatch = useDispatch();

  const editHandler = (id) => {
    dispatch(editTodo(id));
  };

  const editInputHandler = (e) => {
    dispatch(setEditInput(e.target.value))
  }

  const updateTodoHandler = () => {
    dispatch(updateTodo())
  }

  return (
    <li
      className={`flex items-center text-
        lg border rounded-md ${isComplete && "bg-gray-200 "}`}
    >
      <span className="flex items-center gap-4 flex-1 p-4">
        <div
          className={`w-4 h-4 rounded-full cursor-pointer ${isComplete ? "bg-green-400" : "bg-gray-400 "
            }`}
        ></div>
        <div className="w-full">
          {id === editId && isEdit ? (
            <input type="text" value={editInput} className="border text-xl" onChange={editInputHandler} />
          ) : (
            <p className={`${isComplete && "text-gray-500"} text-xl`}>{task}</p>
          )}
        </div>
      </span>

      <span className="flex gap-6 p-4">
        <button
          disabled={isComplete}
          onClick={() => id === editId && isEdit ? updateTodoHandler() : editHandler(id)}
        >
          {id === editId && isEdit ? (
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
