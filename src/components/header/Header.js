import { SlSocialInstagram } from 'react-icons/sl';
import { Outlet } from 'react-router-dom';
import { Header, Link, Nav, Wrap, InstaIcon, Logo } from './Header.styled';
import MobileMenuComponent from './MobileMenu.js';
import './header.css';

export const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Logo href="/">Decor-Boutique</Logo>

        <Wrap>
          <Nav>
            <Link
              className={({ isActive }) => (isActive ? 'active' : null)}
              to="/rental-collection"
            >
              Rental Collection
            </Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contacts">Contacts</Link>
          </Nav>

          <div>
            <InstaIcon
              target="_blank"
              href="https://www.instagram.com/decorboutiquerental/"
            >
              <SlSocialInstagram></SlSocialInstagram>
            </InstaIcon>
          </div>
        </Wrap>
      </Header>
      <MobileMenuComponent />
      <Outlet />
    </>
  );
};
