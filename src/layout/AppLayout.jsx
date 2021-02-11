import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import ExamSelection from "../views/ExamSelection";

export default function AppLayout() {
  return (
    <div>
      <Navbar title="Exam preparations" />
      <Switch>
        <Route path="/app/selection" component={ExamSelection} />
      </Switch>
    </div>
  );
}
