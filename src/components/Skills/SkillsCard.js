import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";

import "./skills.css";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: "50px auto 0px auto",
  },
  fontIcon: {
    fontSize: "100px",
    color: "#b9b9b9",
    [theme.breakpoints.down("1001")]: {
      fontSize: "80px",
    },
    [theme.breakpoints.down("500")]: {
      fontSize: "60px",
    },
  },
  iconText: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: "#ffffff",
    [theme.breakpoints.down("1001")]: {
      fontSize: "12px",
      fontWeight: "600",
    },
    [theme.breakpoints.down("500")]: {
      fontSize: "10px",
      fontWeight: "800px",
    },
  },
}));

const SkillsCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <FontAwesomeIcon className={classes.fontIcon} icon={props.icon} />
      <h3 className={classes.iconText}>{props.name}</h3>
    </div>
  );
};

export default SkillsCard;
