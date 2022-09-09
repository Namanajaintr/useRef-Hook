import React from "react";
import { Component } from "react";

function withCounter(PassedComponent, initialCount = 0) {
  class WrappedComponent extends Component {
    state = {
      count: initialCount,
    };

    incrementCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    decrementCount = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };

    render() {
      return (
        <PassedComponent
          count={this.state.count}
          increment={this.incrementCount}
          decrement={this.decrementCount}
          {...this.props}
        />
      );
    }
  }
  return WrappedComponent;
}
export default withCounter;
