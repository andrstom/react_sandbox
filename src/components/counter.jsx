import React, { Component } from "react";

class Counter extends Component {
  // UPDATE phase
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Zavolat AJX a ziskat nová data, efektivně získat data jen, když je to potřeba
      console.log("AJAX call");
    }
  }

  // UNMOUNT phase
  componentWillUnmount() {
    console.log("Counter - unmount");
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Žádné" : value;
  }

  // MOUNT phase
  render() {
    console.log("Counter - rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Přidat
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Smazat
        </button>
      </div>
    );
  }
}

export default Counter;
