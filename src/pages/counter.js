import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {count}</p>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        >
          plus
        </button>
        <button
          onClick={() =>
            this.setState({
              count: count - 1,
            })
          }
        >
          minus
        </button>
      </div>
    );
  }
}

export default Counter;
