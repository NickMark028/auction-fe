import { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {}

const PublicRoute: FC<Props> = (props: Props) => {
  const { path, exact, strict, component } = props;

  return (
    <Route path={path} exact={exact} strict={strict} component={component} />
  );
};

export default PublicRoute;
