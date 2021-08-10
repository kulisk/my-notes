import React from 'react';

export const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>,
  callback: React.Dispatch<React.SetStateAction<string>>) => {
  callback(event.target.value);
};
