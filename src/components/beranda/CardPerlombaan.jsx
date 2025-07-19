import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./beranda.css";
const CardPerlombaan = ({ data }) => {
  const navigate = useNavigate();
  const { id, judul, deskripsi, kategori, timeline } = data || {};

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between mb-2">
          <span className="badge bg-info">{kategori || "Umum"}</span>
          <span className="text-muted" style={{ fontSize: "0.875rem" }}>
            Deadline: {timeline?.pendaftaran_selesai || "Tidak tersedia"}
          </span>
        </div>
        <Card.Title>{judul || "Judul tidak ditemukan"}</Card.Title>
        <Card.Text>
          {deskripsi?.slice(0, 100) || "Deskripsi belum tersedia"}...
        </Card.Text>
        <Button variant="success" onClick={() => navigate(`/perlombaan/${id}`)}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPerlombaan;
