import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import AuthButton from '../components/AuthButton';
import RegularText from '../components/RegularText';
import { colors } from '../styles/variables';
import AuthForm from '../components/AuthForm';
import TextInputItem from '../components/TextInputItem';
import { signUp } from '../http';
import { onChangeHandler } from '../shared';
import { LOGIN_ROUTE } from '../const/routes';
import { Alert } from '../components/Alert';

const Register: React.FC = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const postData = {
    login,
    email,
    password,
  };

  function onRegisterClick() {
    if (login === '' || email === '' || password === '') {
      Alert('Fill in all the fields');
      return;
    }
    if (!validator.isEmail(email)) {
      Alert('Wrong email');
      return;
    }
    if (password !== confirmPassword) {
      Alert('Passwords mismatch');
      return;
    }

    signUp(postData)
      .then(() => {
        history.push(LOGIN_ROUTE);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <AuthForm title="Registration">
      <form action="#">
        <TextInputItem
          title="username"
          type="text"
          onChange={(event) => onChangeHandler(event, setLogin)}
        />
        <TextInputItem
          title="e-mail"
          type="text"
          onChange={(event) => onChangeHandler(event, setEmail)}
        />
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
