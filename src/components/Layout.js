import React from 'react';
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';
import '../App.css';
import '../styles/Layout.css';

export default function Header() {

  return (<main className="heroImg">
      
    <header>
        <div className="header-title">
          <h1>Dustin Smith - Full Stack Web Developer</h1>
        </div>
            <nav className="header-nav">
                <ul>
                <li>
                    <NavLink to="/" className="navi">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className="navi">Projects</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/repos" className="navi">Repositories</NavLink>
                </li> */}
                <li>
                    <NavLink to="/resume" className="navi">Resume</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navi">Contact Me</NavLink>
                </li>
                </ul>
            </nav>
      </header>
        <div className="stuff">
            <Outlet />
        </div>
<footer></footer>
</main>
  );
}