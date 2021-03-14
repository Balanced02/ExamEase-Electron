import { Switch, Route } from "react-router-dom";
import ExamSelection from "../views/ExamSelection";
import TakeExam from "../views/TakeExam";

export default function AppLayout() {
  return (
    <div>
      <Switch>
        <Route exact path="/app/selection" component={ExamSelection} />
        <Route exact path="/app/take-exam" component={TakeExam} />
      </Switch>
    </div>
  );
}
