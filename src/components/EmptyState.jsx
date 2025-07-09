import React from 'react';
import PropTypes from 'prop-types';

const EmptyState = ({ type, keyword }) => {
  return (
    <div className="text-center my-5">
      <h1>😥</h1>
      {keyword ? (
        <h1>
          {type} dengan kata kunci "{keyword}" tidak ditemukan.
        </h1>
      ) : (
        <h1>Belum ada {type} yang tersedia saat ini.</h1>
      )}
      <p className="text-muted">
        Silakan coba dengan kata kunci lain atau periksa kembali nanti.
      </p>
    </div>
  );
};

EmptyState.propTypes = {
  type: PropTypes.string.isRequired,
  keyword: PropTypes.string,
};

EmptyState.defaultProps = {
  keyword: '',
};

export default EmptyState;