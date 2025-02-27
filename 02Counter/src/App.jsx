import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [ counter , setcounter] =  useState(0)


// let counter = 0;


  function IncrementValue()
  {
    console.log("clicked :" , Math.random());
    setcounter(counter+2)
    console.log(counter)
  }
  function decrementvalue(){
    setcounter(counter-2)
  }

  return (
    <>
     <h1> Chai aur Aditya</h1>
     <h2>count Value : {counter}</h2>
     <button onClick={IncrementValue}> Increment </button>
     <br />
     <button onClick={decrementvalue}>Decrement</button>
     
    </>
  )
}

export default App
