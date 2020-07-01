import React from "react";
import Paper from "../components/paper/paper";
import Container from "../layout/container";
import AboutContent from "../components/aboutContent/aboutcontent";

const About = () => {
  return (
    <Paper>
      <Container
        FlexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <AboutContent />
      </Container>
    </Paper>
  );
};

export default About;
