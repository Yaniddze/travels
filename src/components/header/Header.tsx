import { FC } from 'react';
import styled from 'styled-components';

import {
  NavLink,
} from './NavLink';

const HeaderWrapper = styled.div`
  background: #000;
  color: #fff;

  height: 100px;
  display: flex;
  flex-direction: column;
  > * {
    margin: auto 0;
    font-size: 1.5rem;
  }
`;  

const NavWrapper = styled.div`
  display: flex;

  > * {
    margin: 0 auto;
  }
`;

export const Header: FC = () => {

  return (
    <HeaderWrapper>
      <NavWrapper>
        <NavLink 
          route="/"
          label="Главная страница"
        />
        <NavLink 
          route="/mybooking"
          label="Мои поездки"
        />
      </NavWrapper>
    </HeaderWrapper>
  )
}