import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  top: 0;
  padding: 30px;
  align-items: center;
  background: #ccd0c3;
  @media (max-width: 768px) {
    display: block;
    height: 200px;
  }
`;

export const InstaIcon = styled.a`
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 20px;
  color: white;
  &:hover {
    color: #2196f3;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 30px;
  right: 10px;
`;

export const Link = styled(NavLink)`
  padding: 1px 4px;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  font-size: 30px;
  border-radius: 7px;
  color: white;
  &:is(:hover, :active) {
    color: #2196f3;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Logo = styled.a`
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 30px;
  color: white;
  text-decoration: none;

  &:is(:hover, :focus) {
    color: #2196f3;
  }
`;
