import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <Jumbotron fluid>
      <h1>Lorem ipsum!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>
        <Button variant="primary" href="/more">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Intro;
