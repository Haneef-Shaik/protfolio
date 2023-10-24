import './App.css'
import { FadeIn } from './components/FadeIn'
import { RootLayout } from './components/RootLayout'
import Landing from './screens/Landing'

function App() {
  return (
    <div className='w-screen h-screen overflow-auto scrollbar-hide bg-gray-800' >
    <FadeIn className=" z-10 grid">
    <RootLayout>
      <Landing/>    
    </RootLayout>
    </FadeIn>
    </div>
  
  )
}

export default App
