import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <h1>A slack clone</h1>
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* React-routers -> chat screen */}
      </div>
    </div>
  );
}

export default App;
