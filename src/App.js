import RouteHistoryWrapper from './wrappers/RouteHistoryWrapper'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={RouteHistoryWrapper} />
      </Switch>
    </Router>
  );
}

export default App;
