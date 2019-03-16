import React from 'react';

import './Footer.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer id="footer">
      DevOfThrones, le blog du développeur React — {year} &copy;
    </footer>
  );
};

export default Footer;
