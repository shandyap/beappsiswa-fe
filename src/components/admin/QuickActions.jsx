import React from 'react';
import { BsPlusLg, BsPencilSquare, BsBell } from 'react-icons/bs';

const QuickActions = ({ onAddBeasiswaClick, onAddLombaClick }) => {
  return (
    <div className="quick-actions-section">
      <h4>Aksi Cepat</h4>
      <div className="actions-grid">
        <button className="action-card blue" onClick={onAddBeasiswaClick}>
          <div className="action-icon">
            <BsPlusLg />
          </div>
          <span>Tambah Beasiswa</span>
        </button>

        <button className="action-card purple" onClick={onAddLombaClick}>
          <div className="action-icon">
            <BsPlusLg />
          </div>
          <span>Tambah Perlombaan</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;