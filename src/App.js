import * as React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
/* import Repos from "./pages/Repos"; */
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <div>
       <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="repos" element={<Repos/>} /> */}
          <Route path="resume" element={<Resume/>} />
          <Route path="contact" element={<Contact/>} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
