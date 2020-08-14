import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <h1>A slack clone</h1>

      {/* headers */}
      <Header />
      {/* Sidebars */}
      {/* React-routers -> chat screen */}
    </div>
  );
}

export default App;
