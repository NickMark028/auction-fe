import React, {useEffect, useState, Fragment } from "react";
import { setConstantValue } from "typescript";

import { instance } from 'Utils';
import "../../styles/global.scss"

import  {Userlist}  from "../userlist";
import  {Productlist}  from "../productlist";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from "components";
    



   

  
    

   


export const Admin: React.FC = () => {
    
    const [main, set] = useState(<Userlist/>);
  



  return (
      
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/admin' exact component={Userlist} />
        <Route path='/admin/product' component={Productlist} />
     
      </Switch>
    </Router>
  </>
  );
};
