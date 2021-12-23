import { Provider } from "react-redux";
import store from "redux/store";

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from "pages";
import DetailItem from "pages/detail";
import { PublicRoute } from "routers";
import { PageURL } from "enum/PageURL";
import PrivateRoute from "routers/PrivateRoute";
import { Detail } from "components";
import SearchPage from "pages/search";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute exact={true} path={PageURL.Home} component={HomePage} />
          <PublicRoute path={PageURL.Search} component={SearchPage} />
          <PublicRoute path={PageURL.Category} component={Detail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
