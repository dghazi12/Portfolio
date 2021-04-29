import * as React from "react";

import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

export default IndexPage;
