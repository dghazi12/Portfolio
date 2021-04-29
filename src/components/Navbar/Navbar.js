import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-scroll";

import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  mobileNavbar: {
    display: "none",
    [theme.breakpoints.down("1024")]: {
      display: "block",
    },
  },
  hide: {
    [theme.breakpoints.down("1024")]: {
      display: "none",
    },
  },
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.down("1000")]: {
      display: "none",
    },
  },
  buttonContainer: {
    alignItems: "center",
    flex: "0 0 85%",
    display: "flex",
    justifyContent: "flex-end",
  },
  name: {
    color: "black",
    fontFamily: "Nunito Sans",
    fontSize: "24px",
    fontWeight: "600",
    [theme.breakpoints.down("1117")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("600")]: {
      fontSize: "0px",
    },
  },
  button: {
    fontSize: "16px",
    color: "#000",
    fontFamily: "Nunito Sans",
    paddingLeft: "32px !important",
    paddingRight: "32px !important",
    paddingBottom: "16px",
    paddingTop: "16px",
    [theme.breakpoints.down("1001")]: {
      display: "none",
    },
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <>
      {/* <MobileNavbar className={classes.mobileNavbar} /> */}
      <React.Fragment>
        <CssBaseline />
        <AppBar
          className={classes.test}
          style={{ backgroundColor: "#f8f8f2", width: "100%" }}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.name}>
              David A Ghazi
            </Typography>
            <div className={classes.buttonContainer}>
              <Button>
                <Link
                  to="home-container"
                  className={classes.button}
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </Button>
              <Button>
                <Link
                  to="skills-container"
                  className={classes.button}
                  spy={true}
                  smooth={true}
                >
                  Skills
                </Link>
              </Button>
              <Button>
                <Link
                  to="projects-container"
                  className={classes.button}
                  spy={true}
                  smooth={true}
                >
                  Projects
                </Link>
              </Button>
              <Button>
                <Link
                  to="contact-container"
                  className={classes.button}
                  spy={true}
                  smooth={true}
                >
                  Contact
                </Link>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Drawer className={classes.drawer} />
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </>
  );
}
