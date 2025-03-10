import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  const [size, setsize] = useState(50)
  const [number, setnumber] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [passoword, setpassword] = useState("")
  // use ref hook 
  const passwordref = useRef(null) 

  const passwordGenerater = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghihklmnopqrstuvwxyz"
    if (number) str += "1234567890"
    if (charAllowed) str += "`~!@#$%^&*()_+=-':;,.?/|"

    for (let i = 1; i <= size; i++) {

      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setpassword(pass)
   

  }, [size, number, charAllowed, setpassword])
  
  useEffect(()=>{
    passwordGenerater()
  },[number, size,charAllowed,])

  // password copy function
const copyPasswordToClickboard = useCallback(()=> {
  passwordref.current?.select()
  window.navigator.clipboard.writeText(passoword)
 
},[passoword])
  


  return (
    <>
     <div className=' flex justify-center items-center bg-amber-100 h-dvh shadow-md rounded-lg '>
      <div className='w-full bg-gray-800 max-w-md text-amber-50 text-center rounded-lg shadow'>
      <h1 className=' text-3xl font-extrabold '>Password Generator</h1>    
      
      <div className='flex rounded-4xl'>
      <input type="text"
          value={passoword}
          className=' text-center bg-gray-700  outline-none w-full  py-3 px-3'
          placeholder='Password'
          readOnly
          ref={passwordref}
        />
        <button
        onClick={copyPasswordToClickboard }
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  '> Copy</button>
      </div>
        <div className='flex gap-x-2 py-4 flex-wrap'>


<div>   
   <input type="range"
          min={6}
          max={99}
          value={size}
          className='cursor-pointer'
           onChange={(e)=>{
            setsize(e.target.value)
         
           }}
           />
           <label > Length: {size}</label>

</div>

         




           <div>
             <input type="checkbox"
           defaultChecked = {number}
           className='ml-5'
           onChange={()=>{
             setnumber((prev) => !prev)
           }}
           />
                 <label > numbers</label>

           </div>
          



           <div>
              <input type="checkbox"
           defaultChecked = {charAllowed}
           className='ml-5'
           onChange={()=>{
             setcharAllowed((prev) => !prev)
           }}
           />
                 <label > characters</label>
           </div>
               
        </div>

      </div>

     </div>
    </>
  )
}

export default App
