import React from "react";
import Grid from "@material-ui/core/Grid";

import "./projects.css";
import ProjectsCards from "./ProjectsCards";
import Sound from "../../images/ProjectsImages/OpenSound.jpg";
import TorontoTech from "../../images/ProjectsImages/TorontoTech.jpg";
import Quiz from "../../images/ProjectsImages/CodeQuiz.jpg";
import Scheduler from "../../images/ProjectsImages/Scheduler.jpg";
import Weather from "../../images/ProjectsImages/Weather.jpg";
import Readme from "../../images/ProjectsImages/ReadmeGenerator.jpg";
import Summary from "../../images/ProjectsImages/EmployeeSummary.jpg";
import Daburger from "../../images/ProjectsImages/DaBurger.jpg";
import Tracker from "../../images/ProjectsImages/EmployeeTracker.jpg";
import Note from "../../images/ProjectsImages/NoteTaker.png";
import Workout from "../../images/ProjectsImages/WorkoutTracker.jpg";
import Build from "../../images/ProjectsImages/BuildBurger.gif";

const Projects = () => {
  return (
    <Grid className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <Grid className="first-projects">
        <ProjectsCards
          cardImage={TorontoTech}
          alt="toronto-tech"
          cardHeader="Toronto Tech"
          cardBody="Currently working with a team of developers to create a website aimed at supporting youth in the Greater Toronto Area. This website provides information for volunteers, clients and partners."
          githubLink="https://github.com/Toronto-Tech-Mentoring/TTM-Website"
          demoLink="https://torontotechmentoring.netlify.app/"
        />

        <ProjectsCards
          cardImage={Sound}
          alt="open-sound"
          cardHeader="Open Sound"
          cardBody="An alternative to Spotify, this webpage gives the user the ability to search for an artist, song or album and add them to their profile to create their own personalized playlist."
          githubLink="https://github.com/morenogomes/project_2"
          demoLink="https://stark-woodland-75959.herokuapp.com/app"
        />

        <ProjectsCards
          cardImage={Build}
          alt="build-burger"
          cardHeader="Build-A-Burger"
          cardBody="A simple burger builder application, this webpage allows the user to create their own personalized burger with a subtotal for their selection."
          githubLink="https://github.com/dghazi12/Build-A-Burger"
          demoLink="https://ghazi-build-a-burger.herokuapp.com/"
        />

        <ProjectsCards
          cardImage={Quiz}
          alt="code-quiz"
          cardHeader="Code Quiz"
          cardBody="Created a quiz that will store all high- scores upon completion of the quiz. Users will be penalized 10 seconds for every wrong answer submitted, thus affecting their final score."
          githubLink="https://github.com/dghazi12/davidaghazi04.github.io"
          demoLink="https://dghazi12.github.io/davidaghazi04.github.io/"
        />
      </Grid>

      <Grid className="first-projects">
        <ProjectsCards
          cardImage={Scheduler}
          alt="work-scheduler"
          cardHeader="Work Day Scheduler"
          cardBody="Created a simple calendar application that allows the user to input and save events for each hour of the day. Completed events are marked in green."
          githubLink="https://github.com/dghazi12/davidaghazi05.github.io"
          demoLink="https://dghazi12.github.io/davidaghazi05.github.io/"
        />

        <ProjectsCards
          cardImage={Weather}
          alt="weather-dashboard"
          cardHeader="Weather Dashboard"
          cardBody="Created a website that will display the current and 5- day forecast of any city searched for by the user. Used OpenWeather API to retrieve the weather data for the different cities."
          githubLink="https://github.com/dghazi12/davidaghazi06.github.io"
          demoLink="https://dghazi12.github.io/davidaghazi06.github.io/"
        />

        <ProjectsCards
          cardImage={Daburger}
          alt="da-burger"
          cardHeader="Eat-Da-Burger"
          cardBody="Created a burger logger with MySQL, Node, Express, Handlebars and ORM. Used Node and MySQL to query and route data in the app, and handlebars to generate the HTML."
          githubLink="https://github.com/dghazi12/davidaghazi13.github.io"
          demoLink="https://ghazi-burger-logger.herokuapp.com/"
        />

        <ProjectsCards
          cardImage={Note}
          alt="note-taker"
          cardHeader="Note Taker"
          cardBody="This application can be used to write, save, and delete notes. Uses express backend to save and retrieve note data from a JSON file."
          githubLink="https://github.com/dghazi12/davidaghazi11.github.io"
          demoLink="https://ghazi-note-taker.herokuapp.com/"
        />
      </Grid>

      <Grid className="first-projects">
        <ProjectsCards
          cardImage={Workout}
          alt="workout-tracker"
          cardHeader="Workout Tracker"
          cardBody="This application is a workout tracker. Created the Mongo database with a Mongoose schema and handled routes with express."
          githubLink="https://github.com/dghazi12/davidaghazi17.github.io"
          demoLink="https://ghazi-workout-tracker.herokuapp.com/"
        />

        <ProjectsCards
          cardImage={Readme}
          alt="readme-generator"
          cardHeader="Readme Generator"
          cardBody="This application asks a series of questions, awaiting the response from the user. Based on the response, a good README.MD file is generated for your project."
          githubLink="https://github.com/dghazi12/dghazi12-davidaghazi09.github.io"
          demoLink="https://github.com/dghazi12/dghazi12-davidaghazi09.github.io/blob/master/Images/Readme_Generator.gif"
        />

        <ProjectsCards
          cardImage={Summary}
          alt="employee-summary"
          cardHeader="Employee Summary"
          cardBody="This application consists of prompts requiring the user to input information about the team manager and team members. The application will create a nicely formatted HTML file."
          githubLink="https://github.com/dghazi12/davidaghazi10.github.io"
          demoLink="https://github.com/dghazi12/davidaghazi10.github.io/blob/master/images/EmployeeSummary.gif"
        />

        <ProjectsCards
          cardImage={Tracker}
          alt="employee-tracker"
          cardHeader="Employee Tracker"
          cardBody="This application helps employers architect and build a solution for managing a company's employees using node, inquirer and MySQL."
          githubLink="https://github.com/dghazi12/davidaghazi12.github.io"
          demoLink="https://github.com/dghazi12/davidaghazi12.github.io/blob/master/images/EmployeeTracker.gif"
        />
      </Grid>
    </Grid>
  );
};

export default Projects;
