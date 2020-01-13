import React from "react";
import "./App.css";
import Header from "./Components/Header";
// import Action from "./Components/Action";
import Options from "./Components/Options";
import AddOption from "./Components/AddOption";

function App() {
  const title = "Indecision";
  const subtitle = "Put your life in the hands of the machinez";
  const options = [];

  return (
    <div className="App">
      <Header title={title} subtitle={subtitle} />
      <Options options={options} />
      {/* <Action hasOptions={options.length} /> */}

      <AddOption />
    </div>
  );
}

export default App;
