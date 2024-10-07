import './App.css'
import Form from './components/Form'
import TaskList from './components/TaskList';

function App() {


  return (
    <div className='w-3/4 m-auto my-12 flex flex-col'>
      <h1 className='text-4xl font-bold mb-12 text-center'>Todo List</h1>

      <Form />
      <TaskList />
    </div>
  )
}

export default App
