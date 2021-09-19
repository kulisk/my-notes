import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { loginAction } from '../reducers/UserReducer';
import AuthForm from '../components/AuthForm';
import AuthButton from '../components/AuthButton';
import { colors } from '../styles/variables';
import RegularText from '../components/RegularText';
import { HOME_ROUTE, RECOVER_ROUTE, REGISTRATION_ROUTE } from '../const/routes';
import SmallText from '../components/SmallText';
import TextInputItem from '../components/TextInputItem';
import { signIn } from '../http';
import { Alert } from '../components/Alert';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const onLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const postData = {
    login,
    password,
  };

  function onLoginClick() {
    if (login === '' || password === '') {
      Alert('Fill in all the fields');
      return;
    }
    signIn(postData)
      .then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        dispatch(loginAction(response.data.login));
        history.push(HOME_ROUTE);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <AuthForm title="Log in">
      <form action="#">
        <TextInputItem
          title="login"
          type="text"
          onChange={(event) => onLoginChange(event)}
        />
        <TextInputItem
          title="password"
          type="password"
          onChange={(event) => onPasswordChange(event)}
        />
      </form>
      <AuthButton onClick={() => onLoginClick()}>
        <RegularText color={colors.white}>Log in</RegularText>
      </AuthButton>
      <div
        style={{
          marginTop: '30px',
          textAlign: 'center',
        }}
      >
        <NavLink to={RECOVER_ROUTE}>
          <SmallText color="blue">
            Forgot password?
          </SmallText>
        </NavLink>
      </div>
      <div
        style={{
          marginTop: '30px',
          textAlign: 'center',
        }}
      >
        <NavLink to={REGISTRATION_ROUTE}>
          <SmallText color="#000">
            Don’t have an account yet? Register
          </SmallText>
        </NavLink>
      </div>
    </AuthForm>
  );
};

export default Login;
