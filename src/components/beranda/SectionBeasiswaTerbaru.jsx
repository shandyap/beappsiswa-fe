import React, { useEffect, useState } from "react";
import { getAllBeasiswa } from "../../services/api";
import CardBeasiswa from "./CardBeasiswa";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./beranda.css";

const SectionBeasiswaTerbaru = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllBeasiswa()
      .then((res) => setData(res.slice(0, 3)))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section className="section-terbaru mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Beasiswa Terbaru</h2>
        <Link to="/beasiswa" className="lihat-semua">
          Lihat Semua &gt;
        </Link>
      </div>
      {error ? (
        <div className="text-danger">Error: {error}</div>
      ) : (
        <Row>
          {data.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <CardBeasiswa data={item} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default SectionBeasiswaTerbaru;
