import PageFooter from '../footer/Footer.js';
import React from 'react';
import { useState } from 'react';
import Modal from '../modal/Modal.js';
import '../modal/App.css';
import '../modal/App.css';
import useToggle from '../customToggle/CustomToggle.js';
import emailjs from 'emailjs-com';
import validator from 'validator';
import {
  MyForm,
  ButtonSubmit,
  Textarea,
  Input,
  LabelText,
  FormWrapper,
} from './Contacts.styled';

function useInput(defaultValue) {
  const [value, setValue] = useState((defaultValue = ''));

  const handleValue = e => {
    setValue(e.targetTarget.value);
  };

  return [value, setValue, handleValue];
}

const Contacts = () => {
  const [name, setName] = useInput('');
  const [email, setEmailError] = useState('');
  const [message, setMessage] = useInput('');
  const [isModalOpen, setModalOpen] = useToggle(false);

  const values =
    name === '' ||
    email === '' ||
    message === '' ||
    email === 'Enter valid Email!';

  const validateEmail = e => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Valid email');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_08bxowc',
        'template_wzku9hr',
        e.target,
        '3SDHZ_wnfkYeO2bfX'
      )
      .then(
        result => {
          setTimeout(() => {
            window.location.reload();
          }, 4000);
        },
        error => {
          console.log(error.text);
        }
      );
  }

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
              onChange={setName}
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
              onChange={setMessage}
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
      <PageFooter />
    </>
  );
};

export default Contacts;
