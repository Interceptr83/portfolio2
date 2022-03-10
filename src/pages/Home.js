import React from 'react';
import { Icon, /* InlineIcon */ } from "@iconify/react";
import '../styles/Home.css';
import ProfilePic from '../assets/images/profilepic.png';

export default function Home() {
    return (
      <div className="contentSec perspective">
          <div className="glass1">
              <img src={ProfilePic} alt=""></img>
          </div>
          <div className="glass2">  
            <h1>Welcome to my Portfolio</h1>
            <p>I started with a background in coding in High School. Learning HTML, CSS, Basic, Pascal and C++ with the goal of wanting to get into game design. After graduation I worked for a small web development company for a short period but ended up getting drawn into working for my family business in car and RV sales.</p>
            <p>After 20 years in the sales field where I had never really been happy, I decided it was time to change directions and go back to what I had always wanted to be doing. Working in coding.</p>
            <p>So now I'm in the process of completeing the Full Stack Web Development course at UC Irvine to start moving back into the coding field.</p>
          </div>
      </div>
    );
  }