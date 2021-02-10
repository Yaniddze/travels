import { FC } from "react";
import styled from 'styled-components';

import {
  Sales,
  Search,
} from '../pageParts';

const MainPageWrapper = styled.div`
  display: flex;
  > * {
    margin: 0 auto;
    width: 80%;
  }
`;

export const MainPage: FC = () => (
  <MainPageWrapper>
    <div>
      <Search />
      <div>
        <h2>Акции</h2>
        <Sales />
      </div>
    </div>
  </MainPageWrapper>
)