import React, { useState } from 'react';
import Modal from '../modal/Modal.js';
import { useToggle } from '../../customHooks/CustomHooks.js';
import validator from 'validator';
import {
  MyForm,
  ButtonSubmit,
  Textarea,
  Input,
  LabelText,
  FormWrapper,
} from './Contacts.styled';
import sendEmail from '../../utils/SubmitFunction.js';

const Contacts = () => {
  const [email, setEmailError] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    message: '',
  });
  const [isModalOpen, setModalOpen] = useToggle(false);
  const { name, message } = userData;

  const values =
    name === '' ||
    email === '' ||
    message === '' ||
    email === 'Enter valid Email!';

  const handleUserValue = e => {
    setUserData(state => ({ ...state, [e.target.name]: e.target.value }));
  };

  const validateEmail = e => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Valid email');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  return (
    <>
      <FormWrapper>
        <MyForm onSubmit={sendEmail}>
          <h1>CONTACT US</h1>
          <LabelText>
            <p>Name</p>
            <Input
              type="text"
              placeholder="Name"
              onChange={handleUserValue}
              name="name"
            />
          </LabelText>
          <LabelText>
            <p>Email</p>
            <Input
              type="email"
              placeholder="Email"
              onChange={validateEmail}
              name="email"
            />
            <p
              style={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              {email}
            </p>
          </LabelText>
          <LabelText>
            <p>Message</p>
            <Textarea
              placeholder="Type your message"
              onChange={handleUserValue}
              name="message"
            />
          </LabelText>
          <ButtonSubmit
            disabled={values ? true : false}
            type="submit"
            onClick={setModalOpen.toggle}
          >
            {values ? 'Fill all the fields' : 'Submit'}
          </ButtonSubmit>
          {isModalOpen ? <Modal /> : null}
        </MyForm>
      </FormWrapper>
    </>
  );
};

export default Contacts;
