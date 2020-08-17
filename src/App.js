import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          {/* React-routers -> chat screen */}
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
