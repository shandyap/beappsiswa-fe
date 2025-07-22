import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import CardPerlombaan from './CardPerlombaan';
import { useIntersectionObserver } from '../../hooks/UseIntersectionObserver';
import './beranda.css';

const AnimatedCard = ({ children, index }) => {
  // Opsi: animasi akan terpicu saat 10% bagian kartu terlihat
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref} 
      className={`card-animation-wrapper ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }} // Efek muncul berurutan
    >
      {children}
    </div>
  );
};

const SectionPerlombaanTerbaru = ({ competitions, loading, error }) => {
  return (
    <section className="section-terbaru mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Perlombaan Terbaru</h2>
        <Link to="/perlombaan" className="lihat-semua">
          Lihat Semua &gt;
        </Link>
      </div>
      
      {loading && <p className='loading-text'>Memuat perlombaan...</p>}
      {error && <div className="text-danger">Error: {error}</div>}
      {!loading && !error && (
        <Row>
          {competitions.map((item, index) => (
            <Col key={item.id} md={4} className="mb-4">
              <AnimatedCard index={index}>
                <CardPerlombaan data={item} index={index} />
              </AnimatedCard>
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default SectionPerlombaanTerbaru;