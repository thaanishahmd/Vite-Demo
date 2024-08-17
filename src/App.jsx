import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navibar from "./components/Navibar";

function App() {
  return (
    <>
    <Navibar/>
      {/* <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage/>} />
          </Routes>
        </Router>
      </div> */}
    </>
  )
}

export default App
