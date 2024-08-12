import React from 'react'
import MainWebsite from './MainWebsite'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InternalDashboard from './InternalDashboard'
import Header from './Header'


function App() {
  return (
    // <h1 className="text-5xl text-red font-bold underline">
    //   Hello world!
    // </h1>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Header />}>
        <Route path='' element={<MainWebsite />} />
        <Route path='dashboard' element={<InternalDashboard />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
