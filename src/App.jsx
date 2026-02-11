import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Projects from './Pages/Project';
import MainLayout from "./layouts/MainLayout";
import Mainblog from './Pages/blogs/Mainblog';
import Blog1 from './Pages/blogs/Blog1';
import Blog2 from './Pages/blogs/Blog2';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* WITH Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* WITHOUT Navbar */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Mainblog />} />
        <Route path="/blogs/1" element={<Blog1 />} />
        <Route path="/blogs/2" element={<Blog2 />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
