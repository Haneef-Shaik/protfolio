import './App.css'
import Landing from './screens/Landing'
import Progress from './screens/Progress'

function App() {
  return (
    <div className='w-screen h-screen overflow-auto scrollbar-hide bg-gray-800'   >
      <Landing/> 
    <Progress />
    </div>
  
  )
}

export default App
