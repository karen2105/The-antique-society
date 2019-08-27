import React from 'react';

const Footer = () => {
  return (
    <div className="antiques-footer">
      <span className="brand-name-footer"><span className="small-copy">The</span> <br/>ANTIQUE <br/>SOCIETY</span>
      <h5 className="footer-contact-links">CONTACT & LINKS</h5>
      <div className="footer-copyright">
        © Antique Society is a registered charity 
        <span className="event-container d-sm-none"> no. 251863</span>.
      </div>
      <a className="footer-privacy-terms" href="#home">PRIVACY POLICY</a> | <a href="#home" className="footer-privacy-terms">TERMS & CONDITIONS</a>
    </div>
  );
}

export default Footer;