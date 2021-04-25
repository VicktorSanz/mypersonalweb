import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Layout from './Layout'
import routes from '../routes/routes'

const RouteHistoryWrapper = () => {
  let history = useHistory();
  return (
    <Layout >
      {routes.map((route, i) =>
        <Route
          {...history}
          key={i}
          exact path={route.path}
          component={route.component}
        />
      )}
    </Layout>
  );
}

export default RouteHistoryWrapper;