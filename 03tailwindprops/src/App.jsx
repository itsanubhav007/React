import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './component/Card'

function App() {
  
let myobject = {
  username: "Anubhav",
  age : 21
}

let myarr = [1 ,2 ,3];
  return (
    <>
     
        <h1 className = "bg-green-400 text-black p-4 rounded-xl">TailWind Test</h1>
       <Card username = "itsanubhav007" btnText = "click ME"/>
       <Card username = "Anubhav" binText = "visit me"/>
    </>
  )
}

export default App
