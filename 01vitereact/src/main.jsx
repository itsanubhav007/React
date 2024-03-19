import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import {jsx as _jsx} from "react/jsx-dev-runtime.js"

function Myapp(){
  return(
    <div>
      <h1>
        custom app
      </h1>
    </div> 
  )
}


//const ReactElement = {
//  type : 'a', //kis type ka element
//  props :{
//   href : 'https://www.google.com/',
//   target : '_blank',
//
//  },
//  children : 'Click me to visit google '
//}
const anotherElement = (
  <a href="https://www.google.com/" target='_blank'>visit google</a> 
)

const anotherUser = 'Anubhav';
// Create element in react.
const ReactElement = React.createElement(
  'a',
  {href:'https://google.com' , target : '_blank'},
  'clickmetovisitgoogle',
  anotherElement
)








ReactDOM.createRoot(document.getElementById('root')).render(
  
  ReactElement
)
