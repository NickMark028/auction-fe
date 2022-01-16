import React, { useEffect, useState } from 'react';
import '../../styles/profile.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from 'react-router-dom';
import {
  ChangePass,
  BidderProduct,
  SellerProduct,
  AddProduct,
  UserInfo,
  Description,
} from 'components';
import { RequestToSeller } from 'components/request-seller';
import { Modal, Popover, PopoverContent } from 'react-bootstrap';
import { RequestBid } from 'components/request-bid-seller';
import  instance  from 'utils/axiosClient';
export const Profile: React.FC = () => {
  const history = useHistory();
  
  const [sellerAccess,setSeller] = useState(false);
  var [isUser,setUser] = useState(false);
  function logout() {
    console.log('logged out');

    localStorage.removeItem('auction-user-token');
    localStorage.removeItem('auction-user-data');
    localStorage.removeItem('auction-user-id');
    localStorage.removeItem('auction-first-name');
    localStorage.removeItem('auction-last-name');
    localStorage.removeItem('auction-user-role');
    localStorage.removeItem('auction-user-score');

    history.push('/');
  }

useEffect(()=>{
instance.post('/api/user/role',{
id: localStorage.getItem('auction-user-id')
}).then((res)=>{

  if (res.data.role == 'seller') {
    setSeller(true)
  }
  if (res.data.role != 'admin') {
    setUser(true)
  }
  console.log(isUser)
}).catch((err)=>{
  console.log(err.response)
})
},[])


  return (
    <div className="app-container">
      <div className="sidebar">
        <ProSidebar className="pro">
          <Menu iconShape="square">
            <MenuItem>
              My profile
              <Link to="/profile" />
            </MenuItem>
            {isUser ? (
              <>
                <MenuItem>
                  Product Bidded
                  <Link to="/profile/product-bidded" />
                </MenuItem>
                <MenuItem>
                  Become Seller
                  <Link to="/profile/to-seller" />
                </MenuItem>
              </>
            ) : null}
            {sellerAccess ? (
              <>
                   <MenuItem>
                  Request Bid form bidder
                  <Link to="/profile/request-bid" />
                </MenuItem>
                <MenuItem>
                  Product to Bid(Seller)
                  <Link to="/profile/product-to-bid" />
                </MenuItem>
                <MenuItem>
                  Add product
                  <Link to="/profile/add" />
                </MenuItem>
              </>
            ) : null}
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
          <Route path="/profile/request-bid" component={RequestBid} />
        </Switch>
      </div>
    </div>
  );
};
