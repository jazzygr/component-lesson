import React from "react";
import AddOption from "./Option";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.state = {
      options: ["One", "Two", "Three"]
    };
  }
  handleRemoveAll() {
    console.log(this.state.options);
  }
  handlePick() {
    alert("Handled");
  }
  render() {
    return (
      <>
        {this.state.options.map(option => (
          <AddOption key={option} optionText={option} />
        ))}
        <button onClick={this.handleRemoveAll}>Remove all</button>

        <button
          onClick={this.handlePick}
          disabled={!this.state.options.length > 0}
        >
          What should I do?
        </button>
      </>
    );
  }
}

export default Options;
