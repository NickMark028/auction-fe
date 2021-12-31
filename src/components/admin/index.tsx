import React, {useEffect, useState, Fragment } from "react";
import { setConstantValue } from "typescript";
import {Link, Switch} from 'react-router-dom'
import { instance } from 'Utils';
import "../../styles/global.scss"

import  {Userlist}  from "../userlist";
import  {Productlist}  from "../productlist";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


    



   

  
    

   


export const Admin: React.FC = () => {
    
    const [main, set] = useState(<Userlist/>);
  



  return (
      
    <div className="body">
<div>
        <ProSidebar>
  <Menu className="menu"
  >
    <MenuItem color="red">Dashboard</MenuItem>
    <MenuItem onClick={()=>set(<Userlist/>)} >Component 1</MenuItem>
    <MenuItem onClick={()=>set(<Productlist/>)}>Component 2</MenuItem>
  
  </Menu>
</ProSidebar>
</div>
 
<div className="list">
{main}
</div>

</div>
  );
};
