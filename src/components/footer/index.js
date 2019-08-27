import React from 'react';
import {COPYRIGHT} from '@/constants/copyright';

const Footer = () => {
  return (
    <div className="antiques-footer">
      <span className="brand">The Antique society</span>
      <h5>CONTACT AND LINKS</h5>
      <span>{COPYRIGHT}</span>
      <a href="#home">PRIVACY POLICY</a> | <a href="#home">TERMS & CONDITIONS</a>
    </div>
  );
}

export default Footer;