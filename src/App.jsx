import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import NavBar from './navbar/NavBar';
import Home from './Components/Home/Home';
import Blog from './Components/Blog';
import Download from './Components/Download';
import About from './Components/MediaLiibrary';
import How from './Components/How';

function App() {

  return (
    <>
     <BrowserRouter>

<NavBar/>

  <Routes >
    <Route path="/" element={ <Home />}></Route>
    <Route path="Blog" element={ <Blog />}></Route>
    <Route path="Download" element={ <Download/>}></Route>
    <Route path="About" element={ <About/>}></Route>
    <Route path="how" element={ <How/>}></Route>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
