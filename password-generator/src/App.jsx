import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <p className='text-green-500'>Hello World</p>
   </div>
  )
}

export default App
