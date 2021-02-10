import { FC } from "react";
import {
  GlobalStyles,
  Routes,
} from './appConfig';
import { Header, } from './components';

export const App: FC = () => (
  <div>
    <GlobalStyles />
    <div id="header">
      <Header />
    </div>
    <div id="main">
      <Routes />
    </div>
    <div id="footer">
      <div>
        footer
      </div>
    </div>
  </div>
);
