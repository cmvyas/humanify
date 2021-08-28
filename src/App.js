import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./App.css";
import "./components/Chat/chat.css";
import HumanifyFrontPage from "./components/humanifymain/humanifyFrontPage";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timer from "./components/meditation/timer";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SettingsContext from "./components/meditation/SettingsContext";
import Chat from "./components/Chat/Chat";
import Signin from "./components/Chat/Signin";

function App() {
  const [workMinutes, setWorkMinutes] = useState(15);
  const [breakMinutes, setBreakMinutes] = useState(2);

  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <HumanifyFrontPage />
          </Route>
          <Route path='/meditate'>
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
          <Route path='/chat'>{user ? <Chat /> : <Signin />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
