import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
        {/* <h2>Put your life in the hands of the machines</h2> */}
      </>
    );
  }
}

export default Header;
