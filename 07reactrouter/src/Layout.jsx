import React from 'react'
//MATLAB KI HAMKO AGAR KOI AISA CODE HAI JO KI SABME SAME RAKHNA HAI TOH 
//HAM ROUTER KI MDAD LETE HAI

import Header from './components/Header'
import Footer from './components/Footer'

import { Outlet } from 'react-router-dom'

// outlet kya akrta hai ye layout ko as a base use karega or
//jo bhi chiz ayegi upar ya niche ka use same rakhega
 


function Layout (){
return (
    <>
    <Header/>
    <Footer/> 
     </>
)
    
}

export  default Layout