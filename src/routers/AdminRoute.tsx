import { PageURL } from 'enum/PageURL';
import { FC, useEffect } from 'react';
import { Redirect, Route, RouteProps, useHistory } from 'react-router-dom';

interface Props extends RouteProps {}

const AdminRoute: FC<Props> = (props: Props) => {
  const { path, exact, strict, component, location } = props;

  const accessToken = localStorage.getItem('auction-user-token');
  var hasAccess =  false;
  const role = localStorage.getItem('auction-user-role')
  if(role=='admin'){
    hasAccess=true
  }
  return hasAccess ? (
    <Route path={path} exact={exact} strict={strict} component={component} />
  ) : (
    <Redirect to={`/`} />
  );
};

export default AdminRoute;
