import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import LanguagePicker from "./LanguagePicker";
import Language from "./Language";
import LessonVideos from "./LessonVideos";
import VideoPlayer from "./VideoPlayer";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LanguagePicker />
          </Route>
          <Route exact path="/language/:id">
            <Language />
          </Route>
          <Route exact path="/french/lesson/:id">
            <LessonVideos />
          </Route>
          <Route exact path="/french/video/:id">
            <VideoPlayer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
