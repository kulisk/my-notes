import { confirmAlert } from 'react-confirm-alert';
import React from 'react';
import { StyledConfirmAlert } from '../styles/ConfitmAlertStyle';
import RegularText from './RegularText';

export const Alert = (message: string): void => {
  confirmAlert({
    message,
    customUI: ({ onClose }) => (
      <StyledConfirmAlert>
        <div className="titleContainer">
          <RegularText color="#fff">{message}</RegularText>
        </div>
        <div className="buttonsContainer">
          <button onClick={onClose} type="button">OK</button>
        </div>
      </StyledConfirmAlert>
    ),
  });
};
