
import { useState } from 'react'
import { useTask } from '../Context/TaskContextProvider';

function Search() {
      const [text, setText] = useState('');
      const {addTask} = useTask();
      const handleClick = () =>{
        if(text.trim().length <= 0){
            return
        } else {
            addTask(text)
            setText("")
        }
      }
  return (
    <div className='flex gap-3'>
        <div className='w-full'> 
            <input 
            type="text"
             placeholder='Enter your task' 
             className='border rounded px-1 outline-none w-full py-1' 
             onChange={(e) => setText(e.target.value)}
             value={text}
             />
        </div>
        <div>
            <button 
            className='text-xl font-bold bg-blue-800 py-1 w-25 rounded px-2 cursor-pointer text-white hover:bg-blue-500 duration-200 ease-in-out'
            onClick={handleClick}
            >Add
            </button>
        </div>
    </div>
  )
}

export default Search