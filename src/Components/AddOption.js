import React from "react";

class AddOption extends React.Component {
  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <>
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button> Add Option</button>
        </form>
      </>
    );
  }
}

export default AddOption;
