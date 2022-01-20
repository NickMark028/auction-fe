import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PublicRoute } from 'routers';
import { PageURL } from 'enum/PageURL';
import PrivateRoute from 'routers/PrivateRoute';
import { AdminRoute } from 'routers';
import { DetailItem } from 'pages';
import loginItem from 'pages/login';
import regItem from 'pages/register';
import Admin from 'pages/admin';
import profileItem from 'pages/profile';
import { HomePage, SearchPage } from 'pages';
import store from 'redux/store';
import WatchListPage from 'pages/watch-list';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute exact={true} path={PageURL.Home} component={HomePage} />
          <PublicRoute path={PageURL.Search} component={SearchPage} />
          <PublicRoute path={PageURL.Detail} component={DetailItem} />
          <PublicRoute path={PageURL.Login} component={loginItem} />
          <PublicRoute path={PageURL.Register} component={regItem} />
          <PrivateRoute path={PageURL.WatchList} component={WatchListPage} />
          <AdminRoute path={PageURL.Admin} component={Admin} />
          <PrivateRoute path={PageURL.Profile} component={profileItem} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
