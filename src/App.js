import { Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts/Contacts.js';
import Home from './components/home/Home.js';
import Rental from './components/rental/Rental.js';
import Gallery from './components/gallery/Gallery.js';
import galleryCollection from './common/data/gallery.json';
import rentalList from './common/data/rental.json';
import SharedLayout from './components/layout/Layout.js';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/rental-collection"
          element={<Rental rentalCollection={rentalList} />}
        />
        <Route
          path="/gallery"
          element={<Gallery photoGallery={galleryCollection} />}
        />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
