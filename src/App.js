import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import HumanifyFrontPage from "./components/humanifymain/humanifyFrontPage";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path='/' exact>
              <HumanifyFrontPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
