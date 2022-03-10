import React from 'react';
import {Link } from 'react-router-dom';
import { Icon, InlineIcon } from "@iconify/react";
import '../styles/Resume.css';
import Frsky from '../assets/images/frsky-small.jpg';
import Adventure from '../assets/images/adventure-rv-small.jpg';
import Genacom from '../assets/images/genacom-small.jpg';
import Vintage from '../assets/images/vintage-small.jpg';
import SRJC from '../assets/images/srjc-small.jpg';
import UCI from '../assets/images/UCI-logo.jpeg';

export default function Resume() {
    return (
      <div className="resContentSec">
          <div className="resGlass">  
          <div>
              <h1>Resume</h1><br></br><br></br>
              <article>
                <h2>Download: <Link to="./assets/files/dustinsmith-resume.pdf" target="_blank" download><Icon icon="iwwa:file-pdf" color="red" width="45" height="45" inline={true} /></Link></h2><br></br><br></br>
                <h2>Profile</h2><br></br>
                <p>Full stack developer having recently completed the Full Stack Web Development Boot
                Camp from UC Irvine. Having 20+ years in sales experience I decided I wanted to move
                back into coding. My skill set includes: </p><br></br>
                <ul>
                  <li><Icon icon="ci:file-html" color="black" width="24" height="24" inline={true} /> HTML</li>
                  <li><Icon icon="ci:file-css" color="rgb(0, 204, 255)" width="24" height="24" inline={true} /> CSS</li>
                  <li><Icon icon="fluent:document-javascript-24-filled" color="yellow" width="24" height="24" inline={true} /> Javascript</li>
                  <li><Icon icon="akar-icons:bootstrap-fill" color="rgb(137, 3, 190)" width="24" height="24" inline={true} /> Bootstrap</li>
                  <li><Icon icon="akar-icons:jquery-fill" color="rgb(79, 149, 255)" width="24" height="24" inline={true} />JQuery</li>
                  <li><Icon icon="cib:mysql" color="rgb(255, 112, 136)" width="24" height="24" inline={true} />MySQL</li>
                  <li><Icon icon="teenyicons:mongodb-outline" color="green" width="24" height="24" inline={true} />Mongoose/MongoDB</li>
                  <li><Icon icon="vscode-icons:file-type-reactjs" width="24" height="24" inline={true} />React</li>
                  <li><Icon icon="uim:vuejs" color="green" width="24" height="24" inline={true} />Vue</li>
                </ul><br></br>
                <h2>Employment History</h2><br></br>
                <h4>Wholesale Sales Account Representative, FrSky RC INC North America,
                Brea, CA</h4>
                <h4>March 2019 — Current</h4>
                <img src={Frsky} alt=""/>
                <p> Wholesale Account Representative for Remote control electronics used in both
                Hobby and Commercial fields. Responsible for managing dealer accounts, being
                their point of contact for placing orders or any other issues they might have.
                Responsible for seeking out new dealers and bringing them onboard with the
                brand.</p><br></br>
                <h4>Online Sales Manager, Adventure RV/Napa Auto Center, Napa, CA</h4>
                <h4>June 2002 — February 2019</h4>
                <img src={Adventure} alt=""/>
                <p>This was my family business. I started working here immediately after High
                School. I started with selling cars. Over the years I took on more responsibility
                starting with managing all of the dealerships online presence. Eventually moving
                more into a leadership role at the dealership. Being a family business this
                required wearing almost every "hat". From acting as a service manager, F&I,
                handling warranty processing, managing employees ect. I was also responsible
                for choosing which back end systems, CRM systems, and pretty much any other
                technology based items that the dealership needed. After about 10 years of being
                a car dealership we decided to switch focus and while we maintained a small lot
                of used vehicles we focused primarily on becoming a new RV dealership. I left
                because my father wanted to retire and I was frustrated with the RV industry.
                This combined with a desire to move away from Napa led to my choice to not
                take over the dealership and move in another direction. So we sold the business
                and I moved to Southern California.</p><br></br>
                <h4>Website project manager, Genacom, Napa, CA</h4>
                <h4>November 2003 — August 2004</h4>
                <img src={Genacom} alt=""/>
                <p>This position was to act as both sales and project manager for web site
                construction. I was the primary point of contact with the client while being
                responsible for distributing different aspects of the construction to assorted
                subcontractors to develop. Then putting those individual pieces together to
                complete the final product.</p><br></br>
                <h2>Education</h2>
                <h4>High School Diploma, Vintage High School, Napa, CA</h4>
                <h4>September 1998 — June 2002</h4>
                <img src={Vintage} alt=""/><br></br><br></br><br></br><br></br><br></br>
                <h4>none, Santa Rosa Junior College, Santa Rosa, CA</h4>
                <h4>August 2002 — December 2003</h4>
                <img src={SRJC} alt=""/>
                <p>After High School I started attending college with the attention of getting a degree
                in computer science. However I was offered job position at a web development
                company by a former teacher and with that new position combined with still
                working part time for my family business this left me little time to continue with
                school.</p><br></br>
                <h4>Certificate, Full Stack Web Development Boot Camp, UC Irvine, Irvine, CA</h4>
                <h4>September 2021 — March 2022</h4>
                <img src={UCI} alt=""/><br></br><br></br>               
              </article>
            </div>
          </div>
      </div>
    );
  }