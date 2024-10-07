import { useSelector } from "react-redux"
import { SelectTodos } from "../TodoSlice"
import Task from "../components/Task"

const TaskList = () => {
    const todos = useSelector(SelectTodos)

    return (
        <ul className="flex flex-col gap-4">
            {
                todos.length > 0 && todos.map((input) => <Task key={input.id} {...input} /> )
            }

        </ul>
    )
}

export default TaskList