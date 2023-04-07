import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from'./components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Header/>
       <div className="bg-indigo-600 w-full h-screen"></div>
    </div>
  )
}

export default App
