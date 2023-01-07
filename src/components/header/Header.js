import { SlSocialInstagram } from 'react-icons/sl';
import { Outlet } from 'react-router-dom';
import './mobile.css';
import { Header, Logo, Link, Nav, Wrap, InstaIcon } from './Header.styled';
import MobileMenuComponent from './MobileMenu.js';

export const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Logo to="/">Decor-Boutique</Logo>

        <Wrap>
          <Nav>
            <Link to="/rental-collection">Rental Collection</Link>
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
