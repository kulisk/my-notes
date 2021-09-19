import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TextInputItem from '../components/TextInputItem';
import { onChangeHandler } from '../shared';
import AuthButton from '../components/AuthButton';
import RegularText from '../components/RegularText';
import { colors } from '../styles/variables';
import AuthForm from '../components/AuthForm';
import { Alert } from '../components/Alert';
import { checkToken, resetPassword } from '../http';
import { LOGIN_ROUTE, MESSAGE_ROUTE } from '../const/routes';

interface Params {
    token: string
}

const PasswordRecover: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const params: Params = useParams();
  const { token } = params;
  useEffect(() => {
    checkToken(token).catch((error) => {
      history.push({
        pathname: MESSAGE_ROUTE,
        state: {
          message: 'Error in getting token',
          error,
        },
      });
    });
  }, [token, history]);

  const onResetClick = () => {
    if (password === '') {
      Alert('Fill in all the fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert('Passwords mismatch');
    }

    resetPassword(token, { password }).then(() => {
      history.push(LOGIN_ROUTE);
    }).catch((error) => {
      console.log('Error in resetting password', error);
    });
  };
  return (
    <AuthForm title="Reset password">
      <form action="#">
        <TextInputItem
          title="enter new password"
          type="password"
          onChange={(event) => onChangeHandler(event, setPassword)}
        />
        <TextInputItem
          title="confirm new password"
          type="password"
          onChange={(event) => onChangeHandler(event, setConfirmPassword)}
        />
      </form>
      <AuthButton onClick={() => onResetClick()}>
        <RegularText color={colors.white}>Reset</RegularText>
      </AuthButton>
    </AuthForm>
  );
};

export default PasswordRecover;
