import React, { useEffect, useState, Fragment } from 'react';
import '../../styles/admin.scss';
import { Userlist } from '../userlist';
import { Productlist } from '../productlist';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';

export const Admin: React.FC = () => {
  

  return (
    <div className='admin-app-container'>
    <div className='admin-sidebar'>
    <ProSidebar className="pro">
    <Menu iconShape="square" className="menu">
     
      <MenuItem >Userlist
      <Link to="/admin"/>
       </MenuItem>
      <MenuItem >Product list
      <Link to="/admin/product"/>
      </MenuItem>
      <MenuItem>Component 2</MenuItem>
      
    </Menu>
    </ProSidebar>
    </div>
 <div className='admin-content'>
  <Switch>
          <Route path="/admin"exact component={Userlist} />
          <Route path="/admin/product" exact component={Productlist} />
  </Switch>
  </div>
  
  </div>
  );
};
