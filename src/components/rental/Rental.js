import { Description, Main } from 'components/home/Home.styled.js';
import Typed from 'react-typed';
import {
  RentalList,
  RentalCollectionAnimation,
  RentalCollectionCard,
  RentalCollectionItem,
  RentalCollectionLink,
  RentalCollectionOverlay,
  RentalCollectionImg,
  RentalCollectionAnimationText,
  RentalCollectionHeading,
  RentalCollectionDescription,
} from './Rental.styled.js';

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
    <RentalCollectionItem>
      <RentalCollectionLink>
        <RentalCollectionOverlay>
          <RentalCollectionImg src={photo} alt={alt} loading="lazy" />
          <RentalCollectionAnimation>
            <RentalCollectionAnimationText>
              {description}
            </RentalCollectionAnimationText>
          </RentalCollectionAnimation>
        </RentalCollectionOverlay>
        <RentalCollectionCard>
          <RentalCollectionHeading>{title}</RentalCollectionHeading>
          <RentalCollectionDescription>
            {description}
          </RentalCollectionDescription>
        </RentalCollectionCard>
      </RentalCollectionLink>
    </RentalCollectionItem>
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
    </>
  );
};

export default Rental;
