import { GiHamburgerMenu } from 'react-icons/gi';
import { SlSocialInstagram } from 'react-icons/sl';
import { Link, InstaIcon, MobileMenu } from './Header.styled';
import { Breakpoint } from 'react-socks';
import { useToggle } from '../../customHooks/CustomHooks';

export default function MobileMenuComponent() {
  const [isOpenMobileMenu, setMobileMenuToggle] = useToggle(false);

  return (
    <MobileMenu>
      <Breakpoint small down>
        <GiHamburgerMenu onClick={setMobileMenuToggle.toggle}></GiHamburgerMenu>
      </Breakpoint>
      {isOpenMobileMenu ? (
        <MobileMenu>
          <Link to="/rental-collection">Rental Collection</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contacts">Contacts</Link>
          <InstaIcon
            target="_blank"
            href="https://www.instagram.com/decorboutiquerental/"
          >
            <SlSocialInstagram></SlSocialInstagram>
          </InstaIcon>
        </MobileMenu>
      ) : null}
    </MobileMenu>
  );
}
