import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import NavBar from './navbar/NavBar';
import Home from './Components/Home/Home';
import Post from './Components/Post';
// import Download from './Components/Download';
import About from './Components/MediaLiibrary';
import How from './Components/How';
import Twitter from './Components/twitterpath';
import Tweets from './Components/twitterpost'

 

function App() {

  return (
    <>
     <BrowserRouter>

<NavBar/>

  <Routes >
    <Route path="/" element={ <Home />}></Route>
    <Route path="post" element={ <Post/>}></Route>
    <Route path="tweets" element={ <Tweets/>}></Route>

    {/* <Route path="Download" element={ <Download/>}></Route> */}
    <Route path="history" element={ <About/>}></Route>
    <Route path="how" element={ <How/>}></Route>
    <Route path="twitter" element={ <Twitter/>}></Route>

  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
