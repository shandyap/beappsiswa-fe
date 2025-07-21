import React, { useEffect, useState } from "react";
import { getAllLomba } from "../../services/api";
import CardPerlombaan from "./CardPerlombaan";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./beranda.css";

const SectionPerlombaanTerbaru = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllLomba()
      .then((res) => setData(res.slice(0, 3)))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section className="section-terbaru">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Perlombaan Terbaru</h2>
        <Link to="/perlombaan" className="lihat-semua">
          Lihat Semua &gt;
        </Link>
      </div>
      {error ? (
        <div className="text-danger">Error: {error}</div>
      ) : (
        <Row>
          {data.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <CardPerlombaan data={item} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default SectionPerlombaanTerbaru;
