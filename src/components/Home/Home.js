import React from "react";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import Picture from "../../images/ProfilePicture/profile-picture.jpeg";
import PDF from "../../components/Resume.pdf";
import "./home.css";
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
              <a
                href="https://www.linkedin.com/in/davidaghazi/"
                rel="noreferrer"
                target="_blank"
                className="test"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="test"
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#b9b9b9",
                    cursor: "pointer",
                  }}
                />
              </a>
              <a href={PDF} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  icon={faFile}
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#b9b9b9",
                    cursor: "pointer",
                  }}
                />
              </a>
              <a
                href="https://github.com/dghazi12"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "#b9b9b9",
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>
          </Grid>
          <Grid className="bio-container">
            <h1 className="home-header">Biography</h1>
            <p className="about-text">
              Full- Stack Web Developer seeking a full or part time position! I
              have a Bachelor's in Engineering, as well as a certificate in Full
              Stack Web Development from the University of Toronto. I am
              currently focusing on React based web applications but welcome any
              challenges/opportunities that come my way. I have built full stack
              applications using JavaScript, jQuery, React, React Native,
              MongoDB, MySQL, Express and NodeJS.
            </p>

            <p className="about-text">
              For the last two years, I have been interning as a front- end
              developer for Toronto Tech Mentoring. I am mainly responsible for
              reviewing and approving code, as well as developing responsive web
              applications using JavaScript framework React.
            </p>

            <p className="about-text">Can I be an asset?</p>

            <Link
              to="contact-container"
              spy={true}
              smooth={true}
              className="contact-button"
            >
              Contact Me!
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Skills />
    </>
  );
};

export default Home;
