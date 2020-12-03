import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppWithRouterAccess from './AppWithRouterAccess';

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppWithRouterAccess />
      </Router>
    </div>
  );
};

export default App;
