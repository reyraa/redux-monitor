import React, { useEffect } from 'react';
import Frames from '../frames';
import Details from '../details';
import Footer from '../footer';

const Panel: React.FC = () => {
  useEffect(() => {
    const wrapper = document.getElementById('app');
    if (wrapper) {
      wrapper.className = 'wrapper panel';
    }
  }, []);

  return (
    <>
      <Frames />
      <Details />
      <Footer />
    </>
  );
};

export default Panel;
