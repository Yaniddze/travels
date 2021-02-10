import { FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <div>
          123
        </div>
      </Route>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
