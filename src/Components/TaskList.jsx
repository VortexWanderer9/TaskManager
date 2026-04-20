import { useTask } from '../Context/TaskContextProvider'
import Search from './Search'

function TaskList() {
  const {tasks}  = useTask()
  return (
    <>
  <div className=' mt-2 p-3 flex flex-col items-center'>
<div>
  <Search />
  <div>
    <h2 className='text-2xl mt-2 font-bold '>Tasks:</h2>
<div className='flex flex-col gap-3'>
  {tasks && tasks.map((t) => (
    <div key={t.id} className='flex justify-between gap-2 items-center p-2 border-2 rounded border-gray-700/20 relative'>
    <div>
      <p>{t.text}</p>
    </div>
   <div className='flex gap-2'>
     <img src={t.isCompleted ? "cross.svg" : "tick.svg"} width={20} alt="Status" />
     <img src="trash.svg" width={15} className='absolute -top-2 -right-2 bg-gray-700/10 cursor-pointer' alt="Delete" />
   </div>
  </div>
  ))}

</div>
  </div>
</div>
    </div>
    
    </>
  )
}

export default TaskList