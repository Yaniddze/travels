import { FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header, } from '../components';

export const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Header>
        <Route path="/">
          <div>
            123
          </div>
        </Route>
      </Header>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
