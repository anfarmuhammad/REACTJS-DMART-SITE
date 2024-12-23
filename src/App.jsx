import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Social from "./Pages/Social"
import Feedback from "./Pages/Feedback"
import About from "./Pages/About";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/social" element={<Social/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
      </Routes>
   </Router>
  )
}

export default App
