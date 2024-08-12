import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header1 from './Header1'

function Header() {
  return (
    <div>
    <main><Header1 /></main>
    <Outlet />
    </div>
  )
}

export default Header
