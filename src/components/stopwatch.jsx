import React, { Component } from "react";
import { Col, Image, Button } from "react-bootstrap";
import Stopwch from "../img/stopwatch.png";

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
    isRunning: false,
    laps: [],
    text: "00:00.0",
  };

  handleStart = () => {
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;
    let miliseconds = this.state.miliseconds;
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.watch = setInterval(() => {
        if (miliseconds === 10) {
          seconds++;
          miliseconds = 0;
        }
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        this.setState({ miliseconds: miliseconds++ });
        this.setState({ seconds: seconds });
        this.setState({ minutes: minutes });
      }, 100);
    }
  };

  handleStop = () => {
    this.setState({ isRunning: false });
    clearInterval(this.watch);
  };

  handleReset = () => {
    this.setState({ isRunning: false });
    clearInterval(this.watch);
    this.setState({ miliseconds: 0 });
    this.setState({ seconds: 0 });
    this.setState({ minutes: 0 });
    this.setState({ laps: [] });
  };

  handleLap = () => {
    if (this.state.isRunning) {
      this.setState({ laps: this.state.laps.concat(this.timeFormat()) });
    }
  };

  timeFormat = () => {
    let sec =
      this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds;
    let min =
      this.state.minutes < 10 ? "0" + this.state.minutes : this.state.minutes;
    let milisec = this.state.miliseconds;

    return min + ":" + sec + "." + milisec;
  };

  render() {
    return (
      <Col sm={4} md={4} className="m-2 text-center bordered stopwatch">
        <Image src={Stopwch} fluid />
        <h2>Stopwatch</h2>
        <h3>
          {this.state.minutes === 0 &&
          this.state.seconds === 0 &&
          this.state.miliseconds === 0
            ? this.state.text
            : this.timeFormat()}
        </h3>
        <Button variant="success" onClick={() => this.handleStart()}>
          Start
        </Button>{" "}
        <Button variant="danger" onClick={() => this.handleStop()}>
          Stop
        </Button>{" "}
        <Button variant="warning" onClick={() => this.handleReset()}>
          Reset
        </Button>{" "}
        <Button variant="primary" onClick={() => this.handleLap()}>
          Lap
        </Button>
        {this.state.laps.length !== 0 ? (
          <ul>
            {this.state.laps.map((lapTime) => (
              <li key={lapTime}>{lapTime}</li>
            ))}
          </ul>
        ) : (
          <div></div>
        )}
      </Col>
    );
  }
}

export default Stopwatch;
