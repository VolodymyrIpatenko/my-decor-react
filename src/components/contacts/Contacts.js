import PageFooter from '../footer/Footer.js';
import React from 'react';
import { useState } from 'react';
import Modal from '../modal/Modal.js';
import '../modal/App.css';
import emailjs from 'emailjs-com';
import validator from 'validator';
import {
  MyForm,
  ButtonSubmit,
  Textarea,
  Input,
  LabelText,
} from './Contacts.styled';

const style = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const values =
    name === '' || email === '' || message === '' || email !== 'Valid Email :)';

  const validateEmail = e => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const ManageValues = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'message':
        setMessage(e.currentTarget.value);
        break;
      default:
        throw new Error('something went wrong');
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
          }, 2000);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div style={style}>
        <MyForm onSubmit={sendEmail}>
          <h1>CONTACT US</h1>
          <LabelText>
            <p>Name</p>
            <Input
              type="text"
              placeholder="Name"
              onChange={ManageValues}
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
              onChange={ManageValues}
              name="message"
            />
          </LabelText>
          <ButtonSubmit
            disabled={values ? true : false}
            type="submit"
            onClick={handleModal}
          >
            {values ? 'Fill all the fields' : 'Submit'}
          </ButtonSubmit>
          {modalOpen ? <Modal /> : null}
        </MyForm>
      </div>
      <PageFooter />
    </>
  );
};

export default Contacts;
