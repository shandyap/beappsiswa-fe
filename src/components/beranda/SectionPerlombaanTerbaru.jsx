import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import CardPerlombaan from './CardPerlombaan';
import './beranda.css';

// Komponen menerima props: competitions, loading, dan error
const SectionPerlombaanTerbaru = ({ competitions, loading, error }) => {
  return (
    <section className="section-terbaru mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Perlombaan Terbaru</h2>
        <Link to="/perlombaan" className="lihat-semua">
          Lihat Semua &gt;
        </Link>
      </div>
      
      {loading && <p>Memuat perlombaan...</p>}
      {error && <div className="text-danger">Error: {error}</div>}
      {!loading && !error && (
        <Row>
          {competitions.map((item, index) => (
            <Col key={item.id} md={4} className="mb-4">
              <CardPerlombaan data={item} index={index} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default SectionPerlombaanTerbaru;