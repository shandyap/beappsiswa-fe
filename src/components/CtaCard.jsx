import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CtaCard = ({ children, link }) => {
  return (
    <div className="cta-card">
      <div className="cta-content">
        <h3>Siap untuk Mengambil Langkah Berikutnya?</h3>
        {children}
      </div>
      <div className="cta-action">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="light">Daftar Sekarang</Button>
        </a>
      </div>
    </div>
  );
};

CtaCard.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
};

CtaCard.defaultProps = {
  link: '#',
};

export default CtaCard;