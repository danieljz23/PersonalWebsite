import React from "react";
import dynamic from "next/dynamic";

// Dynamically import to avoid SSR issues
const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

const Type = () => {
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "inherit",
        color: "inherit",
        fontWeight: 500,
      }}
      startDelay={1000}
      cursorColor="inherit"
      multiText={[
        "C++ Developer",
        "Electrical Systems Integration",
        "React Web Developer",
        "Perseverant Problem Solver",
      ]}
      multiTextDelay={1000}
      typeSpeed={50}
      deleteSpeed={50}
      multiTextLoop={true}
    />
  );
};

export default Type;
