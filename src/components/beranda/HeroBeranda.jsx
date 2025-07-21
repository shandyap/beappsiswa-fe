import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./beranda.css";

const HeroBeranda = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-beranda-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-content">
            <h1>
              Temukan <span className="text-beasiswa">Beasiswa</span> dan{" "}
              <span className="text-perlombaan">Perlombaan</span> Terbaik
            </h1>
            <p>
              Platform informasi terlengkap untuk beasiswa dan perlombaan di
              Indonesia. Raih kesempatan emas untuk pengembangan dirimu!
            </p>
            <div className="cta-buttons">
              <Button
                className="btn-hero btn-hero-primary me-2" // Ubah di sini
                onClick={() => navigate("/beasiswa")}
              >
                Jelajahi Beasiswa
              </Button>
              <Button
                className="btn-hero btn-hero-secondary" // Ubah di sini
                onClick={() => navigate("/perlombaan")}
              >
                Lihat Perlombaan
              </Button>
            </div>
          </Col>
          <Col md={6} className="hero-image text-center mt-4 mt-md-0">
            <img
              src="/assets/icons/Hero-icon.svg"
              alt="Hero"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBeranda;
