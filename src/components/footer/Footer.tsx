import { FC } from "react";
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background: #000;
  color: white;
  height: 100%;
  
  position: relative;
  > * {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`;

export const Footer: FC = () => (
  <FooterWrapper>
    <div>
      <div>
        Телефон “8 (800) 555-33-10”
      </div>
      <div>
        Все права защищены
      </div>
    </div>
  </FooterWrapper>
);
