import Background from "./components/Background"
import Foreground from "./components/Foreground"

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Foreground/>
      <Background/>
    </div>
  )
}

export default App