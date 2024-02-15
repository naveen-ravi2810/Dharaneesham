import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Project } from "./Pages/Project";
import { Contact } from "./Pages/Contact";
import { Navbar } from "./Components/Navbar";
import { ContactComp } from "./Components/ContactComp";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/project" Component={Project}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>
      <hr />
      <ContactComp/>
    </BrowserRouter>
  )
}