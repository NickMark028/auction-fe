import React, { useEffect, useState, Fragment } from 'react';
import { setConstantValue } from 'typescript';

import '../../styles/global.scss';

import { Userlist } from '../userlist';
import { Productlist } from '../productlist';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import { Navbar } from 'components';

export const Admin: React.FC = () => {
  

  return (
    <div className='row'>
    <ProSidebar className="pro">
    <Menu iconShape="square">
     
      <MenuItem >Dashboard
      <Link to="/admin"/>
       </MenuItem>
      <MenuItem >Component 1
      <Link to="/admin/product"/>
      </MenuItem>
      <MenuItem>Component 2</MenuItem>
      
    </Menu>
    </ProSidebar>
 <main className='main'>
  <Switch>
          <Route path="/admin"exact component={Userlist} />
          <Route path="/admin/product" exact component={Productlist} />
  </Switch>
  </main>
  </div>
  );
};
