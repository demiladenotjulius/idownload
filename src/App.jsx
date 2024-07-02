import React from 'react'
import { Routes, Route } from "react-router";
import Firstborn from "./Firstborn/Firstborn";

import './App.css'

function App() {

  return (
    <>
       <Routes>
        <Route index element={<Firstborn />}></Route>
        {/* <Route path="/home" element={<Firstborn />}></Route> */}
      </Routes>
 
    </>
  )
}

export default App
