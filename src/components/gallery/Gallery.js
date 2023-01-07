import PageFooter from '../footer/Footer.js';
import { Title, Main } from 'components/home/Home.styled.js';
import GalleryList from './Gallery.styled';

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
        <Title>Gallery</Title>
        <GalleryList>
          {photoGallery.map(photo => {
            return <Photo key={photo.id} photoGallery={photo} />;
          })}
        </GalleryList>
      </Main>
      <PageFooter />
    </>
  );
};

export default Gallery;
