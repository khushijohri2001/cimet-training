import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TaskList from './components/TaskList';

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []);

  const submitHandler = (e) => {
    e.preventDefault()

    if(input.length > 0 ){
    const newTask = {
      id: Date.now(),
      task: input,
      complete: false
    }

    setTodoList([...todoList, newTask])
    }

    setInput("")
  }

  const taskCompleteHandler = (id) => {
    const updatedTodo = todoList.map((task) => task.id === id ? { ...task, complete: !task.complete } : task)

    setTodoList(updatedTodo);
  }

  const deleteHandler = (id) => {
    const updatedTodo = todoList.filter((task) => task.id !== id)

    setTodoList(updatedTodo);
  }

  const deleteAllHandler = () => {
    setTodoList([]);
  }

  const editUpdateHandler = (id, updatedTask) => {
    const updatedTodo = todoList.map((task) => task.id === id ? {...task, task: updatedTask}: task);

     setTodoList(updatedTodo);
    
  }
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className='w-3/4 m-auto my-12 flex flex-col'>
      <h1 className='text-4xl font-bold mb-12 text-center'>Todo List</h1>

      <Form submitHandler={submitHandler} input={input} setInput={setInput} deleteAllHandler={deleteAllHandler}/>

      <TaskList editUpdateHandler={editUpdateHandler} todoList={todoList} taskCompleteHandler={taskCompleteHandler} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App
