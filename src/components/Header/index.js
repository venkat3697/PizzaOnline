import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  
  return (
    <>
    <div><h1>Pizza Online</h1> </div>

    <div>
    <Outlet/>
    </div>
    
  
    </>
    
    
   
    
  )
}

export default Header