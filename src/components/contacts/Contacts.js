import PageFooter from '../footer/Footer.js';
import React from 'react';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import * as Yup from 'yup';
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

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(30, 'Too Long!'),

  message: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(300, 'Too Long!'),
  email: Yup.string().required('Required').email('Invalid email'),
});

const Contacts = () => {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        'service_08bxowc',
        'template_wzku9hr',
        e.target,
        '3SDHZ_wnfkYeO2bfX'
      )
      .then(
        result => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div style={style}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <MyForm onSubmit={sendEmail}>
              <h1>CONTACT US</h1>
              <label>
                <LabelText>Name</LabelText>
                <Input placeholder="Your name" name="name" required />
              </label>

              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <label>
                <LabelText>Email</LabelText>
                <Input placeholder="Email" name="email" type="email" required />
              </label>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <label>
                <LabelText>Message</LabelText>
                <Textarea
                  placeholder="Feel free to contact with us"
                  name="message"
                  required
                />
              </label>
              {errors.message && touched.message ? (
                <div>{errors.message}</div>
              ) : null}
              <ButtonSubmit type="submit">Submit</ButtonSubmit>
            </MyForm>
          )}
        </Formik>
      </div>
      <PageFooter />
    </>
  );
};

export default Contacts;
