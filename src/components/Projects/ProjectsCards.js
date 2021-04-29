import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "22%",
    backgroundColor: "#EFEFEF",
    height: "100%",
    margin: "20px auto 0px auto",
    border: "black",
    borderStyle: "inset",
    borderWidth: "medium",
    [theme.breakpoints.down("769")]: {
      height: "300px",
    },
    [theme.breakpoints.down("650")]: {
      height: "200px",
    },
  },
  cardImage: {
    height: "170px",
    [theme.breakpoints.down("769")]: {
      display: "none",
    },
    [theme.breakpoints.down("650")]: {
      display: "flex",
      height: "100px",
    },
  },
  header: {
    fontFamily: "Nunito Sans",
    fontWeight: "600",
    fontSize: "22px",
    textAlign: "center",
    [theme.breakpoints.down("1009")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("650")]: {
      fontSize: "10px",
    },
  },
  cardContentBackground: {
    backgroundColor: "#EFEFEF",
    height: "200px",
    [theme.breakpoints.down("1200")]: {
      height: "250px",
    },
    [theme.breakpoints.down("1009")]: {
      height: "210px",
    },
    [theme.breakpoints.down("769")]: {
      height: "260px",
    },
    [theme.breakpoints.down("650")]: {
      height: "20px",
    },
  },
  content: {
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    fontWeight: "400",
    [theme.breakpoints.down("1009")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("650")]: {
      display: "none",
    },
  },
  button1: {
    color: "#001A64",
    fontSize: "16px",
    fontWeight: "600",
    [theme.breakpoints.down("1009")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("650")]: {
      fontSize: "10px",
      fontWeight: "400",
      margin: "15px 0px 0px 11%",
    },
  },
  button2: {
    color: "#001A64",
    fontSize: "16px",
    fontWeight: "600",
    [theme.breakpoints.down("1009")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("650")]: {
      fontSize: "10px",
      position: "absolute",
      fontWeight: "400",
      margin: "50px 0px 0px -50px",
    },
  },
}));

const ProjectsCards = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={props.alt}
        className={classes.cardImage}
        image={props.cardImage}
      />
      <CardContent className={classes.cardContentBackground}>
        <Typography
          className={classes.header}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.cardHeader}
        </Typography>
        <Typography
          className={classes.content}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {props.cardBody}
        </Typography>
      </CardContent>
      <CardActions style={props.style}>
        <Button
          size="small"
          color="primary"
          href={props.githubLink}
          target="_blank"
          className={classes.button1}
        >
          Github
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.demoLink}
          target="_blank"
          className={classes.button2}
        >
          Demo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectsCards;
