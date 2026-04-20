import './App.css'
import TaskList from './Components/TaskList'
import { TaskContextProvider } from './Context/TaskContextProvider'
function App() {


  return (
    <>
     <div className="min-h-screen w-full relative bg-white">
  {/* Cool Blue Glow Top */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
<div className='relative'>
<h2 className='text-3xl font-bold text-center mt-2'>Task manager</h2>
<TaskContextProvider>
  <div>
  <TaskList />
</div>
</TaskContextProvider>
</div>
</div>
    </>
  )
}

export default App
