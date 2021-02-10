import { FC } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

export const Routes: FC = () => (
  <Switch>
    <Route path="/">
      <div>
        123
      </div>
    </Route>
    <Redirect to="/" />
  </Switch>
);
