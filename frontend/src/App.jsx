import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import BlogDetails from "./pages/BlogDetails"
import AdminDashboard from "./pages/AdminDashboard"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-sky-500/90'>
        Tailwind Working Fine
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        {/* :id is comming from useParam() Hook*/}
        <Route path="BlogDetails/:id" element={<BlogDetails />} />
        <Route path="AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  )
}

export default App
