import PageFooter from '../footer/Footer';
import HeaderComponent from '../header/Header';

export default function SharedLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <PageFooter />
    </>
  );
}
