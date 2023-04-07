import React from 'react';
import ReactDOM from 'react-dom';
import { BackdropComponent } from './Backdrop.styled';

export default function Backdrop({ children, closeModal }) {
  return ReactDOM.createPortal(
    <BackdropComponent onClick={closeModal}>{children}</BackdropComponent>,
    document.getElementById('portal')
  );
}
