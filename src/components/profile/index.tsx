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
import { ChangePass, BidderProduct, SellerProduct,AddProduct ,UserInfo,Description } from 'components';
import { RequestToSeller } from 'components/request-seller';
import { Modal, Popover, PopoverContent } from 'react-bootstrap';
export const Profile: React.FC = () => {
  const history = useHistory();
  function logout() {
    console.log('logged out');

    localStorage.removeItem('auction-user-token')
    localStorage.removeItem('auction-user-data')
 
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
              Add product
              <Link to="/profile/add" />
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
          <Route path="/profile/add" component={AddProduct} />
          <Route path="/profile/update/:id" component={Description} />
        </Switch>
      </div>
    </div>
  );
};
