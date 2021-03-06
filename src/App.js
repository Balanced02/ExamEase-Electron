import "./assets/styles/exam_ease.scss";
import Onboarding from "./views/Onboarding";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import AppContext from "./AppContext";
import useController from "./AppController";
import Alert from "./components/Alert";

const { Provider } = AppContext;

function App() {
  const { state, dispatch } = useController();
  return (
    <Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      <Router>
        <div className="app">
          {state.alert && <Alert {...state.alert} />}
          <Switch>
            <Route path="/app" component={AppLayout} />
            <Route path="/" component={Onboarding} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
