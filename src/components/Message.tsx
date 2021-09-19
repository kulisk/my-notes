import React from 'react';
import { useLocation } from 'react-router-dom';

interface LocationType {
    message: string,
    error: string,
}

const Message: React.FC = () => {
  const location = useLocation<LocationType>();

  return (
    <div className="customContainer">
      <div>{location.state.message}</div>
      <div>{location.state.error.toString()}</div>
    </div>
  );
};
export default Message;
