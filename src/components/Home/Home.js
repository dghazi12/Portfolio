import React from "react";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

import { faFile } from "@fortawesome/free-solid-svg-icons";

import Picture from "../../images/ProfilePicture/profile-picture.jpeg";
import "./home.css";
import PDF from "../../images/resume.pdf";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Grid container className="home-container">
        <Grid container className="home-center">
          <Grid container className="contact-info">
            <img src={Picture} className="profile-picture" alt="profile" />
            <h1 className="name">David A Ghazi</h1>
            <div className="home-font-awesome">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ width: "50px", height: "50px", color: "#b9b9b9" }}
              />
              <FontAwesomeIcon
                icon={faFile}
                style={{ width: "50px", height: "50px", color: "#b9b9b9" }}
              />
              <FontAwesomeIcon
                icon={faGithubSquare}
                style={{ width: "50px", height: "50px", color: "#b9b9b9" }}
              />
            </div>
          </Grid>
          <Grid className="bio-container">
            <h1 className="home-header">Biography</h1>

            <p className="about-text">
              Text here where I explain where I graduated from
            </p>

            <p className="about-text">Text here where I talk about myself </p>

            <p className="about-text">
              Text here where I explain where I am working.
            </p>
            <p className="about-text">
              Full- Stack Web Developer seeking a full or part time position! I
              have a bachelor's in Engineering from Cape Breton University, as
              well as a Full Stack Development certificate from the University
              of Toronto. I am currently focusing on React based web
              applications but welcome any challenges/opportunities that come my
              way. I have built full stack applications using Javascript,
              jQuery, React, MongoDB, MySQL, Express and NodeJS. I am a
              passionate, hard working individual who is eager to learn and
              ready to take the next step in my Dev career. If you believe I can
              be an asset, please feel free to contact me!
            </p>
          </Grid>
          <Grid container className="extra-content">
            <div>
              <h1 className="extra-header">Seeking</h1>
              <p className="extra-subheader">Full time front- end position</p>
              <ul className="extra-info">React</ul>
              <ul className="extra-info">Javascript</ul>
              <ul className="extra-info">React Native</ul>
            </div>
            <div>
              <h1 className="extra-header">Education</h1>
              <p className="extra-subheader">
                Full Stack Web Developer (Bootcamp)
              </p>
              <p className="extra-info">University of Toronto</p>
              <p className="extra-info">Cape Breton University</p>
              <p className="extra-info">
                Bacherlor's in Engineering Technology
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Skills />
    </>
  );
};

export default Home;
