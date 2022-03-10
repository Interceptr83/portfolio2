import React from 'react';
/* import { Icon, InlineIcon } from "@iconify/react"; */
import '../styles/ProjectSec.css';
import { Grid, GridItem } from '@chakra-ui/react'
import LargeThumb1 from '../assets/images/project1thumb.jpg';
import LargeThumb2 from '../assets/images/bumpersquarsthmb.jpg';
 import LargeThumb3 from '../assets/images/weatherthumb.jpg';
import LargeThumb4 from '../assets/images/schedulerthumb.jpg';
import LargeThumb5 from '../assets/images/techblog.png';

export default function ProjectSec() {
    return (
        <div className="project_container content">
            <div class="card">
                <div class="card__content">
                    <div class="card__front">
                        <h3 class="card__title">Mars Rover Photo Viewer</h3>
                        <p class="card__subtitle"><img src={LargeThumb1} alt=""></img></p>
                    </div> 
                    <div class="card__back">
                    <h2>Application to view the photos taken from the various mars rovers</h2><br></br>
                    <a href="https://interceptr83.github.io/MarsRoverViewer/" target="newtab"><p>Click here to view the deployed application</p></a><br></br>
                    <a href="https://interceptr83.github.io/MarsRoverViewer/" target="newtab"><p>Click here to view the GitHub Repository</p></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__content">
                    <div class="card__front">
                        <h3 class="card__title">Bumper Squares</h3>
                        <p class="card__subtitle"><img src={LargeThumb2} alt=""></img></p>
                    </div> 
                    <div class="card__back">
                    <h2>This is a multiplayer game where where each player controls a colored icon and tries to bounce the other out of the arena</h2><br></br>
                    <a href="https://bumper-jesus.netlify.app/" target="newtab"><p>Click here to view the deployed application</p></a><br></br>
                    <a href="https://github.com/Interceptr83/Bumpercars" target="newtab"><p>Click here to view the GitHub Repository</p></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__content">
                    <div class="card__front">
                        <h3 class="card__title"> Five Day Weather Forecast</h3>
                        <p class="card__subtitle"><img src={LargeThumb3} alt=""></img></p>
                    </div> 
                    <div class="card__back">
                    <h2>This application will allow you to search a city and see both the current weather along with a 5 day forcast for the selected city</h2><br></br>
                    <a href="https://interceptr83.github.io/5_day_weather_forecast/" target="newtab"><p>Click here to view the deployed application</p></a><br></br>
                    <a href="https://github.com/Interceptr83/5_day_weather_forecast" target="newtab"><p>Click here to view the GitHub Repository</p></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__content">
                    <div class="card__front">
                        <h3 class="card__title">Day Planner</h3>
                        <p class="card__subtitle"><img src={LargeThumb4} alt=""></img></p>
                    </div> 
                    <div class="card__back">
                    <h2>This application is a day planner that allows you to add notes to hourly timeslots, highlighting the current hour</h2><br></br>
                    <a href="https://interceptr83.github.io/WorkDayScheduler/" target="newtab"><p>Click here to view the deployed application</p></a><br></br>
                    <a href="https://github.com/Interceptr83/WorkDayScheduler" target="newtab"><p>Click here to view the GitHub Repository</p></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__content">
                    <div class="card__front">
                        <h3 class="card__title">Tech Blog</h3>
                        <p class="card__subtitle"><img src={LargeThumb5} alt=""></img></p>
                    </div> 
                    <div class="card__back">
                    <h2>This application is a full stack application that is a tech blog website. You can create a user and add your own blogs or comment on others</h2><br></br>
                    <a href="https://serene-depths-50815.herokuapp.com/ " target="newtab"><p>Click here to view the deployed application</p></a><br></br>
                    <a href="https://github.com/Interceptr83/tech-blog" target="newtab"><p>Click here to view the GitHub Repository</p></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__content">
                    <div class="card__front">
                        <h3 class="card__title">Sports Dome</h3>
                        <p class="card__subtitle"><img src={LargeThumb1} alt=""></img></p>
                    </div> 
                    <div class="card__back">
                    <h2>This full stack application helps keep track of sports scores, news, and game highlights.</h2><br></br>
                    <a href="https://interceptr83.github.io/WorkDayScheduler/" target="newtab"><p>Click here to view the deployed application</p></a><br></br>
                    <a href="https://github.com/Interceptr83/WorkDayScheduler" target="newtab"><p>Click here to view the GitHub Repository</p></a>
                    </div>
                </div>
            </div>
        </div>
      
    );
  }
         