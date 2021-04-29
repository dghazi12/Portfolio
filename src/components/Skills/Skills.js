import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faBootstrap,
  faGithub,
  faNodeJs,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

import SkillsCard from "../Skills/SkillsCard";
import "./skills.css";

const Skills = () => {
  return (
    <Grid className="skills-container">
      <h1 className="skills-header">Skills</h1>
      <Grid className="first-group">
        <SkillsCard icon={faHtml5} name="HTML" alt="html" />
        <SkillsCard icon={faCss3} name="CSS" alt="css" />
        <SkillsCard icon={faJsSquare} name="JAVASCRIPT" alt="javascript" />
        <SkillsCard icon={faReact} name="REACT" alt="react" />
      </Grid>

      <Grid className="second-group">
        <SkillsCard icon={faBootstrap} name="BOOTSTRAP" alt="bootstrap" />
        <SkillsCard icon={faGithub} name="GITHUB" alt="github" />
        <SkillsCard icon={faNodeJs} name="NODE" alt="node" />
        <SkillsCard icon={faSass} name="SASS" alt="sass" />
      </Grid>
    </Grid>
  );
};

export default Skills;
