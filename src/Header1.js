import React from 'react'
import { Link } from 'react-router-dom'

function Header1() {
  return (
    
      <div className='px-4 bg-white flex flex-wrap justify-between items-center py-4 shadow-md'>
        <Link to="dashboard">DashBoard</Link>
        <Link to="">Banner</Link>
    </div>
    
  )
}

export default Header1
