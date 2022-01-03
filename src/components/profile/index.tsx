
import React from 'react';
import '../../styles/profile.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BrowserRouter as Router, Switch, Route,Link,useHistory } from 'react-router-dom';
import { UserInfo } from 'components';
import { ChangePass } from 'components';

export const Profile: React.FC = () => {
const history = useHistory();
function logout(){
  console.log("logged out");
  localStorage.removeItem('user-token')
  history.push("/")
}
  return (
  <div className='app-container'>
    <div className='sidebar'> 
        <ProSidebar className="pro">
    <Menu iconShape="square">
     
      <MenuItem >My profile
        <Link to="/profile"/>
       </MenuItem>
      <MenuItem >Reset password
      <Link to="/profile/reset"/>
      </MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
      
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
