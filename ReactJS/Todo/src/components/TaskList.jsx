import Task from "./Task"

const TaskList = ({todoList, taskCompleteHandler, deleteHandler,editUpdateHandler}) => {

    return (
        <ul className="flex flex-col gap-4">
            {
                todoList.length > 0 && todoList.map((input) => <Task key={input.id} input={input} taskCompleteHandler={taskCompleteHandler} deleteHandler={deleteHandler} editUpdateHandler={editUpdateHandler}/>)
            }

        </ul>
    )
}

export default TaskList