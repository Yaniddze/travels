import { FC } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  MainPage,
} from '../pages';

export const Routes: FC = () => (
  <Switch>
    <Route path="/">
      <MainPage />
    </Route>
    <Redirect to="/" />
  </Switch>
);
