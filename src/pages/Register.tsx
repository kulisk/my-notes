import React, { useState } from 'react';
import AuthButton from '../components/AuthButton';
import RegularText from '../components/RegularText';
import { colors } from '../styles/variables';
import AuthForm from '../components/AuthForm';
import TextInputItem from '../components/TextInputItem';
import { signUp } from '../http';
import { onChangeHandler } from '../shared';

const Register = (): JSX.Element => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const postData = {
    login,
    email,
    password,
  };

  function onRegisterClick() {
    if (password !== confirmPassword) {
      console.log('Password mismatch');
    }

    signUp(postData).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <AuthForm title="Registration">
      <form action="#">
        <TextInputItem title="username" type="text" onChange={(event) => onChangeHandler(event, setLogin)} />
        <TextInputItem title="e-mail" type="text" onChange={(event) => onChangeHandler(event, setEmail)} />
        <TextInputItem
          title="password"
          type="password"
          onChange={(event) => onChangeHandler(event, setPassword)}
        />
        <TextInputItem
          title="confirm password"
          type="password"
          onChange={(event) => onChangeHandler(event, setConfirmPassword)}
        />
      </form>
      <AuthButton onClick={() => onRegisterClick()}>
        <RegularText color={colors.white}>Register</RegularText>
      </AuthButton>
    </AuthForm>
  );
};

export default Register;
