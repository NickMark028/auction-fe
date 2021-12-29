import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PublicRoute } from "routers";
import { PageURL } from "enum/PageURL";
import PrivateRoute from "routers/PrivateRoute";
import { DetailItem } from "pages";
import { HomePage, SearchPage } from "pages";
import store from "redux/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute exact={true} path={PageURL.Home} component={HomePage} />
          <PublicRoute path={PageURL.Search} component={SearchPage} />
          <PublicRoute path={PageURL.Detail} component={DetailItem} />
          {/* id */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
