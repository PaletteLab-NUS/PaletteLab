import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          // "Software Developer",
          // "Freelancer",
          // "MERN Stack Developer",
          // "Open Source Contributor",
          "Lab Value 1",
          "Lab Value 2",
          "Lab Value 3",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
