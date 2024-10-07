import { useSelector, useDispatch } from 'react-redux'
import { addTodo, SelectInput, setInput } from '../TodoSlice'

const Form = () => {
  const input = useSelector(SelectInput);

  const dispatch = useDispatch();
  
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo());
  }
  

    return (
      <form onSubmit={submitHandler} className='flex gap-8 justify-center mb-12'>
          <input type="text" placeholder='Write Task Here...'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2'
            value={input}
            onChange={(e) => dispatch(setInput(e.target.value))}
          />
          <button type="submit"
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2  focus:outline-none w-60'
          >Add</button>
          <button className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2 mb-2  focus:outline-none w-60'>Delete All</button>
      </form>
    )
  }
  
  export default Form