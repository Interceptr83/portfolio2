import React, { useState } from 'react';
import { Icon, InlineIcon } from "@iconify/react";
import '../styles/Contact.css';
import ContactForm from  '../components/ContactForm';

export default function Contact() {
    return (
      <div className="contContentSec">
          <div className="contGlass2"> 
              <h1>Contact Me</h1><br></br>
              <div className="contactContent">
                  <div className="contactLinks">
                    <Icon icon="bi:person-circle" color="black" width="24" height="24" inline={true} /><h4>Dustin Smith</h4>
                    <br></br>
                    <Icon icon="ic:baseline-email" color="black" width="24" height="24" inline={true} /><h4>Email: DustinSmith1983@gmail.com</h4>
                    <br></br>
                    <Icon icon="el:phone-alt" color="black" width="24" height="24" inline={true} /><h4>Phone #: (707)280-6500</h4>
                    <br></br>
                    <Icon icon="brandico:linkedin-rect" color="blue" width="24" height="24" inline={true} /><a href="https://www.linkedin.com/in/dustin-smith-227290133/" target= "newtab"><h4>LinkedIn : Click Here</h4></a>
                  </div>
                  <ContactForm/>
              </div>
          </div>
      </div>
    );
  }