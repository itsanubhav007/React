import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 let [counter,setCounter] = useState(15);

 //let counter = 5;
 const addvalue = ()=>{
  //jo bhi chize bhejni hoti hai use state me 
  //wo batches me bhejta hai 
  //counter = counter + 1;
  if(counter>=20)
  {
    alert('Greater than 20');
  }
  else{
  setCounter(prevCounter => prevCounter+1); 
  setCounter((prevCounter)=> prevCounter+1); //yaha pe prev counter existing state ko de raha hoga 
   }
 }


 const removevalue =()=>{
  
  counter = counter - 1;
  if(counter>0)
  {
    setCounter(counter);
  }
  else
  {
    alert('Negative Number');
  }

 }
  return (
      <>
      
       <h1> Anubhav Learning React</h1>
       <h2>Counter value : {counter}</h2>
       <button onClick = {addvalue}>Add Value {counter}</button>
       <br/>
         <button onClick = {removevalue}>Remove Value{counter}</button>
         <p>footer{counter}</p>
    </>
  )
}

export default App
