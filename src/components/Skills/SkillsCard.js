import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./skills.css";

const SkillsCard = (props) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <FontAwesomeIcon
        icon={props.icon}
        style={{
          width: "100px",
          height: "100px",
          color: "#b9b9b9",
        }}
      />
      <h3
        style={{
          display: "flex",
          //   alignItems: "center",
          justifyContent: "center",
          //   textAlign: "center",
          color: "#ffffff",
        }}
      >
        {props.name}
      </h3>
    </div>
  );
};

export default SkillsCard;
