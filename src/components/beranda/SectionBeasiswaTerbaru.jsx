import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import BeasiswaCard from '../beasiswa/BeasiswaCard'; // Pastikan path ini benar
import './beranda.css';

// Komponen sekarang menerima props: scholarships, loading, dan error
const SectionBeasiswaTerbaru = ({ scholarships, loading, error }) => {
  return (
    <section className="section-terbaru mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Beasiswa Terbaru</h2>
        <Link to="/beasiswa" className="lihat-semua">
          Lihat Semua &gt;
        </Link>
      </div>
      
      {/* Logika render berdasarkan props */}
      {loading && <p>Memuat beasiswa...</p>}
      {error && <div className="text-danger">Error: {error}</div>}
      {!loading && !error && (
        <Row>
          {scholarships.map((item, index) => (
            <Col key={item.id} md={4} className="mb-4">
              <BeasiswaCard data={item} index={index} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default SectionBeasiswaTerbaru;