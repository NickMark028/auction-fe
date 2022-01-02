import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PublicRoute } from 'routers';
import { PageURL } from 'enum/PageURL';
import PrivateRoute from 'routers/PrivateRoute';
import { DetailItem } from 'pages';
import loginItem from 'pages/login';
import userList from 'pages/userlist';
import regItem from 'pages/register';
import Admin from 'pages/admin';
import AddProduct from 'pages/addProduct';
import { HomePage, SearchPage } from 'pages';
import store from 'redux/store';
import WatchLaterPage from 'pages/watch-later';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute exact={true} path={PageURL.Home} component={HomePage} />
          <PublicRoute path={PageURL.Search} component={SearchPage} />
          <PublicRoute path={PageURL.Detail} component={DetailItem} />
          <PublicRoute path={PageURL.Login} component={loginItem} />
          <PublicRoute path={PageURL.List} component={userList} />
          <PublicRoute path={PageURL.Register} component={regItem} />
          <PrivateRoute path={PageURL.WatchLater} component={WatchLaterPage} />
          <PublicRoute path={PageURL.Admin} component={Admin} />
          <PublicRoute path={PageURL.Addproduct} component={AddProduct} />
          {/* id */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
