import PageFooter from '../footer/Footer.js';
import { Description, Main } from 'components/home/Home.styled.js';
import { RentalList } from './Rental.styled';
import Typed from 'react-typed';
import './rental.scss';

const titleStyle = {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
};

const RentalPhoto = ({
  rentalCollection: { alt, photo, description, title },
}) => {
  return (
    <li className="rental-collection__item">
      <a className="rental-collection__link">
        <div class="rental-collection__overlay">
          <img
            className="rental-collection__img"
            width="300"
            height="300"
            src={photo}
            alt={alt}
            loading="lazy"
          />
          <div className="rental-collection__animation">
            <p className="rental-collection__animation-text">{description}</p>
          </div>
        </div>
        <div className="rental-collection__card">
          <h2 className="rental-collection__heading">{title}</h2>
          <p className="rental-collection__description">{description}</p>
        </div>
      </a>
    </li>
  );
};

const Rental = ({ rentalCollection }) => {
  return (
    <>
      <Main>
        <Typed
          style={titleStyle}
          strings={['Rental Collection']}
          typeSpeed={100}
          showCursor={false}
        />
        <Description>
          Renting with us is easy! Contact us to see if your preferred backdrop
          is available for your
          <br />
          desired date. Once we confirm availability, we can reserve the
          backdrop for you.
          <br /> Rentals are for up to 4 days.
          <br /> We sign a rental agreement on the day of pick up.
          <br /> A damage deposit is required for all rentals.
          <br /> Contact us if you have any questions!
        </Description>
        <RentalList>
          {rentalCollection.map(photo => {
            return <RentalPhoto key={photo.id} rentalCollection={photo} />;
          })}
        </RentalList>
      </Main>
      <PageFooter />
    </>
  );
};

export default Rental;
