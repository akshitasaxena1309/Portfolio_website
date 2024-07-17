import React from "react";

import Introduction from "./Introduction";
import Academic from "./Academic";
import Skills from "./Skills";
import Project from "./Project";
import OtherProjects from "./OtherProjects";
import Contact from "./Contact";
function Home() {
  return (
    <>
      {/* hero section  */}
      <Introduction />
      {/* Academic Details  */}
      <Academic />
      {/* Skills  */}
      <Skills />
      {/* Main Projects  */}
      <Project />
      {/* other projects  */}
      <OtherProjects />
      {/* contact us  */}
      <Contact />
    </>
  );
}

export default Home;
