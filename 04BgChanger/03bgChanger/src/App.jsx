import { useState } from 'react'
import  './App.css' 

function App() {
  const [color, setColor] = useState("purple")

  return (
    <>
       <div className="w-full h-screen duration-200"
       style={{background: color}}
       >
        <div className="fixed flex  flex-wrap justify-center bg-transparent  bottom-12 inset-x-0 px-0 " >
          <div className='flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
           rounded-3xl'>
            <button className='outline-none rounded-2xl px-4 py-1' style={{background: "red"}}onClick={()=>setColor("red")}>Red</button>
              <button className='outline-none rounded-2xl px-4 py-1' style={{background: "green"}}onClick={()=>setColor("green")}>GREEN</button>
            <button className='outline-none rounded-2xl px-4 py-1' style={{background: "grey"}}onClick={()=>setColor("grey")}>GREY</button>
            <button className='outline-none rounded-2xl px-4 py-1  text-white' style={{background: "black"}}onClick={()=>setColor("black")}>BLACK</button>
            <button className='outline-none rounded-2xl px-4 py-1' style={{background: "blue"}}onClick={()=>setColor("blue")}>BLUE</button>
            <button className='outline-none rounded-2xl px-4 py-1' style={{background: "yellow"}}onClick={()=>setColor("yellow")}>YELLOW</button>
            <button className='outline-none rounded-2xl px-4 py-1' style={{background: "orange"}}onClick={()=>setColor("orange")}>ORANGE</button>
            <button className='outline-none rounded-2xl px-4 py-1' style={{background: "pink"}}onClick={()=>setColor("pink")}>PINK</button>
            <button className='outline-none rounded-2xl px-4 py-1' style={{background: "brown"}}onClick={()=>setColor("brown")}>BROWN</button>
           </div>

        </div>
       </div>
    </>
  )
}

export default App
