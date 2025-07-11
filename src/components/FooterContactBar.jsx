import React from 'react';

const FooterContactBar = ({ kontak }) => {
  if (!kontak) return null;

  return (
    <div className="footer-contact-bar">
      Untuk informasi lebih lanjut, hubungi: 
      <a href={`mailto:${kontak.email}`} className="footer-contact-link">{kontak.email}</a>
      {' | '}
      Telp: {kontak.whatsapp}
    </div>
  );
};

export default FooterContactBar;