import React from 'react';
import Backdrop from './Backdrop';
import { ModalComponent } from './Backdrop.styled.js';

function Modal({ onClose }) {
  return (
    <Backdrop>
      <ModalComponent>
        <p>
          Thank you for contacting as! We will try to respond as soon as
          possible
        </p>
      </ModalComponent>
    </Backdrop>
  );
}

export default Modal;
