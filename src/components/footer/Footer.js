import { Footer, MailLink } from './Footer.styled';
import { Logo } from 'components/header/Header.styled';

const PageFooter = () => {
  return (
    <Footer>
      <Logo href="/">Decor-Boutique</Logo>
      <MailLink href="mailto:decorboutiquerental@gmail.com">
        decorboutiquerental@gmail.com
      </MailLink>
    </Footer>
  );
};

export default PageFooter;
