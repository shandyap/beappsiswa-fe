import React, { useState, useEffect } from 'react';
import { getAllLomba } from '../../services/api.js'
import { BsPencil, BsTrash, BsEye } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const PerlombaanTable = ({competitions, onEdit, onDelete}) => {

  if (!competitions || competitions.length === 0) {
    return <p className='loading-text'>Belum ada data Perlombaan.</p>;
  }

  return (
    <div className="management-table-container">
      <div className="table-controls mb-3">
        <h4>Daftar Perlombaan</h4>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nama Perlombaan</th>
            <th>Penyelenggara</th>
            <th>Kategori</th>
            <th>Pendaftar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {competitions.map((perlombaan) => (
            <tr key={perlombaan.id}>
              <td><strong>{perlombaan.judul}</strong></td>
              <td>{perlombaan.penyelenggara}</td>
              <td>{perlombaan.jenis_lomba}</td>
              <td>{perlombaan.jumlah_pendaftar}</td>
              <td className="action-buttons">
                <Button variant="link" size="sm" onClick={() => onEdit(perlombaan)}>
                  <BsPencil />
                </Button>
                <Button variant="link" size="sm" className="text-danger" onClick={() => onDelete(perlombaan.id)}>
                  <BsTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerlombaanTable;