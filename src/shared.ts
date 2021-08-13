import React, { ChangeEvent } from 'react';

export const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>,
  callback: React.Dispatch<React.SetStateAction<string>>) => {
  callback(event.target.value);
};

export const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>,
  callback: React.Dispatch<React.SetStateAction<string>>) => {
  callback(event.target.value);
};
