import * as React from "react";

import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/index";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default IndexPage;
