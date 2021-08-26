import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./App.css";
import HumanifyFrontPage from "./components/humanifymain/humanifyFrontPage";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timer from "./components/meditation/timer";

import SettingsContext from "./components/meditation/SettingsContext";
function App() {
  const [workMinutes, setWorkMinutes] = useState(15);
  const [breakMinutes, setBreakMinutes] = useState(2);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <HumanifyFrontPage />
          </Route>
          <Route path='/videocall'>
            <SettingsContext.Provider
              value={{
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBreakMinutes,
              }}
            >
              <Timer />
            </SettingsContext.Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
