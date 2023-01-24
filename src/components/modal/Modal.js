import React from 'react';
import Backdrop from './Backdrop';
import './App.css';

function Modal({ onClose }) {
  return (
    <Backdrop>
      <div className="modal">
        <p>
          Thank you for contacting as! We will try to respond as soon as
          possible
        </p>
      </div>
    </Backdrop>
  );
}

export default Modal;
