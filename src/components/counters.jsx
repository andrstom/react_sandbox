import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    // hezci zapis pres "Destructuring arguments"
    const { onReset, counters, onDelete, onIncrement } = this.props;

    console.log("Counters - rendered");
    return (
      <div>
        {counters.length !== 0 ? (
          <button
            onClick={onReset} // hezci a kratsi zapis
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
        ) : (
          <div></div>
        )}

        {counters.length !== 0 &&
          counters.map((counter) => (
            <Counter
              key={counter.id}
              // onDelete={this.props.onDelete} // delsi zapis pres this.props
              // onIncrement={this.props.onIncrement} // delsi zapis pres this.props
              onDelete={onDelete} // hezci a kratsi zapis
              onIncrement={onIncrement} // hezci a kratsi zapis
              counter={counter}
            />
          ))}
      </div>
    );
  }
}

export default Counters;
