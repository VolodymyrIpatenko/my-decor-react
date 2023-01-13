import React from 'react';
import Backdrop from './Backdrop';
import './App.css';

function Modal({ closeModal }) {
  return (
    <Backdrop closeModal={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <p>
          Thank you for contacting as! We will try to respond as soon as
          possible
        </p>
      </div>
    </Backdrop>
  );
}

export default Modal;
