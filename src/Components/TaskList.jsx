import { useTask } from '../Context/TaskContextProvider'
import Search from './Search'

function TaskList() {
  const {tasks, toggleTask, deleteTask}  = useTask()
  const handleClick = (id) =>{
    toggleTask(id)
  }
  const deleteT = (id) => {
deleteTask(id)
  }
  return (
    <>
  <div className=' mt-2 p-3 flex flex-col items-center'>
<div className='w-full'>
  <Search />
  <div>
    <h2 className='text-2xl mt-2 font-bold '>Tasks:</h2>
<div className='flex flex-col gap-3'>
    {tasks && tasks.map((t) => (
    <div key={t.id} className={`flex justify-between gap-2 items-center p-2 border-2 rounded border-gray-700/20 bg-blue-400 relative`}>
    <div>
      <p className={t.isCompleted ? 'font-bold text-white line-through' : 'font-stretch-50% text-red-900'}>{t.text}</p>
    </div>
   <div className='flex gap-2'>
     <div className='cursor-pointer' onClick={(e) => handleClick(t.id)}>
      <img src={t.isCompleted ? "cross.svg" : "tick.svg"} width={20} alt="Status" />
     </div>
      <img src="trash.svg" width={15} className='absolute -top-2 -right-1 bg-fuchsia-700 rounded  cursor-pointer' onClick={(e) => deleteT(t.id)} alt="Delete" />
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