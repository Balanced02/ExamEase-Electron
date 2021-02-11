import "./assets/styles/exam_ease.scss";
import Onboarding from "./views/Onboarding";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/app" component={AppLayout} />
          <Route path="/" component={Onboarding} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
