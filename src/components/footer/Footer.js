import { Logo } from '../header/Header.styled';
import { Footer, MailLink } from './Footer.styled';

const PageFooter = () => {
  return (
    <Footer>
      <Logo to="/">Decor-Boutique</Logo>
      <MailLink href="mailto:decorboutiquerental@gmail.com">
        decorboutiquerental@gmail.com
      </MailLink>
    </Footer>
  );
};

export default PageFooter;
