import styled from 'styled-components';

export const BackdropComponent = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 130vh;
  z-index: 1;
  background: #000000e1;
`;

export const ModalComponent = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  place-content: center;
  padding: 0 1.5rem;
  font-size: 1.2rem;
  border-radius: 1rem;
  background-color: #ccd0c3;
  color: white;
  font-size: 22px;
`;
