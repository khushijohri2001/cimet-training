import Task from "./Task"

const TaskList = ({todoList, taskCompleteHandler, deleteHandler, editHandler}) => {
    return (
        <ul className="flex flex-col gap-4">
            {
                todoList.length > 0 && todoList.map((input) => <Task key={input.id} input={input} taskCompleteHandler={taskCompleteHandler} deleteHandler={deleteHandler} editHandler={editHandler}/>)
            }

        </ul>
    )
}

export default TaskList