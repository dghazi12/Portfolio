import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ProjectsCards = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={props.alt}
        height="140"
        image={props.cardImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.cardHeader}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.cardBody}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={props.githubLink}
          target="_blank"
        >
          Github
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.demoLink}
          target="_blank"
        >
          {props.demo}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectsCards;
