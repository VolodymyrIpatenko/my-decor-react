import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
`;

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 400px;
  padding: 10px;
  border-radius: 7px;
  height: 570px;
  background-color: #ccd0c3;
`;

export const ButtonSubmit = styled.button`
  position: relative;
  transition: background 550ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 150px;
  height: 35px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  border: none;
  color: black;
  cursor: pointer;
  background-color: linear-gradient(
    90deg,
    rgba(197, 197, 141, 1) 46%,
    rgba(147, 173, 177, 1) 100%,
    rgba(238, 130, 238, 1) 100%
  );
  box-shadow: 0px 11px 35px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 11px 35px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 11px 35px 0px rgba(0, 0, 0, 0.75);
`;

export const Textarea = styled.textarea`
  width: 300px;
  height: 150px;
  padding: 5px;
  border-radius: 5px;
  resize: none;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: none;
`;

export const LabelText = styled.p`
  margin: 5px;
  font-size: 20px;
  color: white;
`;
