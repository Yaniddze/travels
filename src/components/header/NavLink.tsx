import { FC } from "react"
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const UnactiveLink = styled.div`
  color: grey;
`;

const ActiveLink = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
`;

type NavLinkProps = {
  children?: never;
  route: string;
  label: string;
}

export const NavLink: FC<NavLinkProps> = ({
  route, label
}: NavLinkProps) => {
  const location = useLocation();
  
  if (location.pathname === route) return (
    <UnactiveLink>
      {label}
    </UnactiveLink>
  )

  return (
    <ActiveLink>
      <Link to={route}>
        {label}
      </Link>
    </ActiveLink>
  )
}