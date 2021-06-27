import React, { useEffect } from 'react';
import Actions from '../actions';
import Details from '../details';

const Panel = () => {
  useEffect(() => {
    const wrapper = document.getElementById('app');
    if (wrapper) {
      wrapper.className = 'wrapper panel';
    }
  }, []);

  return (
    <>
      <Actions />
      <Details />
    </>
  );
};

export default Panel;
