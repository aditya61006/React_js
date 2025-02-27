import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'


function App(props) {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-3xl mb-1 rounded-2xl shadow-2xs font-bold '>Tailwind css</h1>
      <Card username='Baba Ram Dev' />
      <Card username='IIT Baba' age='32453'  />
      <Card username='Naga sadhu'age='99999' />

    </>
  )
}

export default App
