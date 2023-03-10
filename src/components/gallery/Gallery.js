import { Main } from 'components/home/Home.styled.js';
import GalleryList from './Gallery.styled';
import Typed from 'react-typed';

const titleStyle = {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
};

const Photo = ({ photoGallery: { photo, alt } }) => {
  return (
    <li>
      <img width="400" src={photo} alt={alt} loading="lazy" />
    </li>
  );
};

const Gallery = ({ photoGallery }) => {
  return (
    <>
      <Main>
        <Typed
          style={titleStyle}
          strings={['Gallery']}
          typeSpeed={100}
          showCursor={false}
        />
        <GalleryList>
          {photoGallery.map(photo => {
            return <Photo key={photo.id} photoGallery={photo} />;
          })}
        </GalleryList>
      </Main>
    </>
  );
};

export default Gallery;
