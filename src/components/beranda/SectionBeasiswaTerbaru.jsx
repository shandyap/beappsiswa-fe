import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import BeasiswaCard from '../beasiswa/BeasiswaCard';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './beranda.css';


const AnimatedCard = ({ children, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref} 
      className={`card-animation-wrapper ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }} 
    >
      {children}
    </div>
  );
};

const SectionBeasiswaTerbaru = ({ scholarships, loading, error }) => {
  return (
    <section className="section-terbaru mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Beasiswa Terbaru</h2>
        <Link to="/beasiswa" className="lihat-semua">
          Lihat Semua &gt;
        </Link>
      </div>
      
      {loading && <p className='loading-text'>Memuat beasiswa...</p>}
      {error && <div className="text-danger">Error: {error}</div>}
      {!loading && !error && (
        <Row>
          {scholarships.map((item, index) => (
            <Col key={item.id} md={4} className="mb-4">
              <AnimatedCard index={index}>
                <BeasiswaCard data={item} index={index} />
              </AnimatedCard>
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default SectionBeasiswaTerbaru;