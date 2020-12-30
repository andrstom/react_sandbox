import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import Stopwatch from "./components/stopwatch";
import Counters from "./components/counters";
import Abacus from "./img/abacus.png";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      /*{ id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },*/
    ],
  };

  // LIFECYCLE HOOKS (constructor(), componentDidMount(), render(), ...)
  constructor() {
    super();
    console.log("App - constructor");

    this.state = {
      counters: [],
    };
  }

  componentDidMount() {
    // AJAX callback, zavolá se po vykresleni DOM
    console.log("App - mounted");
    // this.setState({ data: "dataFromServer" });
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleAdd = () => {
    const newCounter = [
      ...this.state.counters,
      { id: this.state.counters.length++, value: 0 },
    ];
    this.setState({ counters: newCounter });
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Intro />

        <Container>
          <Row>
            <Col sm={4} md={4} className="m-2 text-center bordered">
              <Image src={Abacus} fluid />
              <h2>Counter</h2>
              <button
                onClick={this.handleAdd} // hezci a kratsi zapis
                className="btn btn-primary btn-sm m-2"
              >
                Nový
              </button>
              <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
              />
            </Col>

            <Stopwatch />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
