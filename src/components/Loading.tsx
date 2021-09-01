import React from 'react';
import Loader from 'react-loader-spinner';

const Loading: React.FC = () => (
  <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
  />
);

export default Loading;
