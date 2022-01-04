import React from 'react';
import '../../styles/profile.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import { UserInfo } from 'components';
import { ChangePass, BidderProduct, SellerProduct } from 'components';
import { RequestToSeller } from 'components/request-seller';

export const Profile: React.FC = () => {
  const history = useHistory();
  function logout() {
    console.log('logged out');
<<<<<<< HEAD
    localStorage.removeItem('auction-user-token');
    localStorage.removeItem('auction-user-data');
    localStorage.removeItem('auction-user-id');
    localStorage.removeItem('auction-first-name');
    localStorage.removeItem('auction-last-name');
=======

    localStorage.clear();
>>>>>>> thanh_FE
    history.push('/');
  }
  return (
    <div className="app-container">
      <div className="sidebar">
        <ProSidebar className="pro">
          <Menu iconShape="square">
            <MenuItem>
              My profile
              <Link to="/profile" />
            </MenuItem>
            <MenuItem>
              Product Bidded
              <Link to="/profile/product-bidded" />
            </MenuItem>
            <MenuItem>
              Product to Bid(Seller)
              <Link to="/profile/product-to-bid" />
            </MenuItem>
            <MenuItem>
              Become Seller
              <Link to="/profile/to-seller" />
            </MenuItem>
            <MenuItem>
              Reset password
              <Link to="/profile/reset" />
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </ProSidebar>
      </div>
      <div className="content">
        <Switch>
          <Route path="/profile" exact component={UserInfo} />
          <Route path="/profile/reset" component={ChangePass} />
          <Route path="/profile/product-bidded" component={BidderProduct} />
          <Route path="/profile/product-to-bid" component={SellerProduct} />
          <Route path="/profile/to-seller" component={RequestToSeller} />
        </Switch>
      </div>
    </div>
  );
};
