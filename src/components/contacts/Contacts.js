import PageFooter from '../footer/Footer.js';
import React from 'react';
import { Formik, Field } from 'formik';
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

const Contacts = () => (
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
          <MyForm>
            <h1>CONTACT US</h1>
            <label>
              <LabelText>Name</LabelText>
              <Input required placeholder="Your name" name="name" />
            </label>

            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label>
              <LabelText>Email</LabelText>
              <Input placeholder="Email" required name="email" type="email" />
            </label>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label>
              <LabelText>Message</LabelText>
              <Textarea
                placeholder="Feel free to contact with us"
                required
                name="message"
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

export default Contacts;
