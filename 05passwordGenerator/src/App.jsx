import { useState, useCallback, useEffect ,useRef } from 'react'
import './App.css'

function App() {
  /*use calleffect apni cache memory me previous state rakhta hai or jab bhi wo state
  kisi ki state change hoti hai tab wo previous chache ki value se match karke dubra function ko chaladeta hai
   */

  /*kisis bhi chiz ka refrence lene ke liye useref */

  /*callback me jis jis pe dependencies hai apki kisi bhi tarah us 
  method ko optimizily run karlo karlo */
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

   //useRef hook
   const passwordRef = useRef(null)

  


  const passwordGenerator = useCallback(fn => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += '1234567890'
    if (charAllowed) str += "!@#$%^&*(){}[]~`?/><,."


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
    }

    setPassword(pass);

  }, [length
    , numberAllowed, charAllowed, setPassword ]);

    const copyPassword = useCallback(()=>{
      console.log("Anubhav");
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,101)
      window.navigator.clipboard.writeText(password);
},[password]);
  
    useEffect(()=> {
      passwordGenerator()
    },[length , numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto
      shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'

      >
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref= {passwordRef}
          />
          <button
            onClick = {copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label >length : {length}</label>


          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />
            <label htmlFor='numberInput'>Number</label>
          </div>
        
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }} />
          <label htmlFor='characterInput'>Characters</label>
        </div>


      </div>


    </div >

    
        
    </>
  )
}

export default App
