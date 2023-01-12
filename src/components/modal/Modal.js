import React from 'react';
import Backdrop from './Backdrop';
import './App.css';

function Modal({ closeModal }) {
  return (
    <Backdrop closeModal={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ullam
          inventore temporibus commodi sapiente, molestiae voluptates facere
          repellat nisi laudantium dolorum minima! Magnam corrupti soluta totam
          incidunt nesciunt quisquam libero.
        </p>
        <button
          style={{ color: 'white', background: 'black', outline: 'none' }}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </Backdrop>
  );
}

export default Modal;
