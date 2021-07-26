import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../reducers/UserReducer';
import AuthForm from '../components/AuthForm';
import AuthButton from '../components/AuthButton';
import { colors } from '../styles/variables';
import RegularText from '../components/RegularText';
import { REGISTRATION_ROUTE } from '../const/routes';
import SmallText from '../components/SmallText';
import TextInputItem from '../components/TextInputItem';

const Login = () => {
  const dispatch = useDispatch();

  function onLoginClick() {
    dispatch(login());
  }

  return (
    <AuthForm title="Log in">
      <form action="#">
        <TextInputItem title="login" type="text" />
        <TextInputItem title="password" type="password" />
      </form>
      <AuthButton onClick={() => onLoginClick()}>
        <RegularText color={colors.white}>Log in</RegularText>
      </AuthButton>
      <div style={{
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
