import React, { useState, useEffect } from 'react';
import { BsPencil, BsTrash, BsEye } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import Pagination from '../Pagination';

const BeasiswaTable = ({
  scholarships,
  onEdit,
  onDelete,
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  if (!scholarships || scholarships.length === 0) {
    return <p className="loading-text">Tidak ada data beasiswa yang cocok.</p>;
  }

  return (
    <div className="management-table-container">
      <div className="table-controls mb-3">
        <h4>Daftar Beasiswa</h4>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nama Beasiswa</th>
            <th>Penyelenggara</th>
            <th>Kategori</th>
            <th>Status</th>
            <th>Kuota</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {scholarships.map((beasiswa) => (
            <tr key={beasiswa.id}>
              <td><strong>{beasiswa.judul}</strong></td>
              <td>{beasiswa.penyelenggara}</td>
              <td>{beasiswa.jenis_beasiswa}</td>
              <td><span className={`status-pill ${beasiswa.status}`}>{beasiswa.status}</span></td>
              <td>{beasiswa.jumlah_pendaftar}</td>
              <td className="action-buttons">
                <Button variant="link" size="sm" onClick={() => onEdit(beasiswa)}>
                  <BsPencil />
                </Button>
                <Button variant="link" size="sm" className="text-danger" onClick={() => onDelete(beasiswa.id)}>
                  <BsTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default BeasiswaTable;