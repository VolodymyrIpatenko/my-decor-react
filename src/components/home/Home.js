import { Img, Main, Description, Title } from './Home.styled';
import PageFooter from '../footer/Footer.js';

const Home = () => {
  return (
    <>
      <Main>
        <Title>
          WEDDING RENTALS AND MUCH
          <br /> MORE!{' '}
        </Title>
        <Description>
          Decor Boutique is a small family business, specialized in providing
          rental backdrops
          <br /> as well as fresh and dried floral items. We love to participate
          in local markets and meeting new people.
          <br /> Seeing happy customers is especially rewarding. Browse the
          other pages on our website to check out our rental collection and see
          what we are up to.
        </Description>
        <Img src={require('./main.jpg')} alt="wedding" />
      </Main>
      <PageFooter />
    </>
  );
};

export default Home;
