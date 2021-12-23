import { Provider } from "react-redux";
import store from "redux/store";

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from "pages";
import DetailItem from "pages/detail";
import { PublicRoute } from "routers";
import { PageURL } from "enum/PageURL";
import PrivateRoute from "routers/PrivateRoute";
import { Detail } from "components";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute exact={true} path={PageURL.Home} component={Home} />
          <PublicRoute exact={true} path={PageURL.Search} component={DetailItem} />
          <PrivateRoute exact={true} path={PageURL.Category} component={Detail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
