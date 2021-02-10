import { FC } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  MainPage,
  SearchPage,
  MyBookingPage,
} from '../pages';

export const Routes: FC = () => (
  <Switch>
    <Route path="/" exact>
      <MainPage />
    </Route>
    <Route path="/search" exact>
      <SearchPage />
    </Route>
    <Route path="/mybooking" exact>
      <MyBookingPage />
    </Route>
    <Redirect to="/" />
  </Switch>
);
