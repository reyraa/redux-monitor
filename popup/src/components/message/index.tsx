import React, { useEffect } from 'react';
import icon from '../../assets/images/icon-256.png';

const Message: React.FC = () => {
  useEffect(() => {
    const wrapper = document.getElementById('app');
    if (wrapper) {
      wrapper.className = 'wrapper message';
    }
  }, []);

  return (
    <section className="message">
      <img src={icon} alt="extension icon" />
      <div className="text">
        <h3>Safari Redux devtools</h3>
        <span>Monitor Redux store</span>

        <p>
          Listening for Redux actions. If you haven&apos;t set up Safari Redux devtools on this website, read the
          <a
            href="https://github.com/reyraa/reduxMonitor"
            target="_blank"
            rel="noreferrer"
          >
            documents
          </a>
          . 
        </p>
      </div>
    </section>
  );
};

export default Message;
