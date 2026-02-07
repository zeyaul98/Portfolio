import React from 'react'
import Nav from './components/Nav'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Pages/Project';
import MainLayout from "./layouts/MainLayout";
import Mainblog from './Pages/blogs/Mainblog';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Routes WITHOUT Navbar */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Mainblog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App