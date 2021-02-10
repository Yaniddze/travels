import { FC } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  MainPage,
  SearchPage,
} from '../pages';

export const Routes: FC = () => (
  <Switch>
    <Route path="/" exact>
      <MainPage />
    </Route>
    <Route path="/search" exact>
      <SearchPage />
    </Route>
    <Redirect to="/" />
  </Switch>
);
