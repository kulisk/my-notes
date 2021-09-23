import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import TextInputItem from '../components/TextInputItem';
import AuthButton from '../components/AuthButton';
import RegularText from '../components/RegularText';
import { colors } from '../styles/variables';
import AuthForm from '../components/AuthForm';
import { onChangeHandler } from '../shared';
import { Alert } from '../components/Alert';
import { sendEmail } from '../http';
import { MESSAGE_ROUTE } from '../const/routes';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const onGoClick = () => {
    if (email === '') {
      Alert('Fill in all the fields');
      return;
    }
    if (!validator.isEmail(email)) {
      Alert('Wrong email');
      return;
    }

    const data = {
      email,
    };

    sendEmail(data).then(() => {
      history.push({
        pathname: MESSAGE_ROUTE,
        state: {
          message: 'We\'ve sent a link to reset your password to your email',
          error: '',
        },
      });
    }).catch(() => {
      Alert('User with this email does not exist');
    });
  };
  return (
    <AuthForm title="Recover password">
      <form action="#">
        <TextInputItem
          title="enter your email"
          type="text"
          onChange={(event) => onChangeHandler(event, setEmail)}
        />
      </form>
      <AuthButton onClick={() => onGoClick()}>
        <RegularText color={colors.white}>Go</RegularText>
      </AuthButton>
    </AuthForm>
  );
};

export default EmailInput;
