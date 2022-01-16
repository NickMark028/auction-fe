import { FC, useEffect } from 'react';
import { Redirect, Route, RouteProps, useHistory } from 'react-router-dom';

interface Props extends RouteProps {}

const PublicRoute: FC<Props> = (props: Props) => {
  const { path, exact, strict, component } = props;
  const role = localStorage.getItem('auction-user-role')
  if(role=='admin'){
   return( <Redirect to={`/admin`} />)
  }
  return (
    <Route path={path} exact={exact} strict={strict} component={component} />
  );
};

export default PublicRoute;
