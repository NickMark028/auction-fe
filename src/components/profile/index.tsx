
import React from 'react';
import '../../styles/profile.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import { UserInfo } from 'components';
import { ChangePass } from 'components';
export const Profile: React.FC = () => {

  return (
  <div className='app-container'>
    <div className='sidebar'> 
        <ProSidebar className="pro">
    <Menu iconShape="square">
     
      <MenuItem >My profile
        <Link to="/profile"/>
       </MenuItem>
      <MenuItem >My product list
      <Link to="/profile/reset"/>
      </MenuItem>
      <MenuItem>Component 2</MenuItem>
      
    </Menu>
    </ProSidebar>
    </div>
    <div className='content'>
    <Switch>
          <Route path="/profile"exact component={UserInfo} />
          <Route path="/profile/reset" component={ChangePass}  />
  </Switch>
    </div>
  </div>
  );
};
