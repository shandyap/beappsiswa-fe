import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./beranda.css";
const CardBeasiswa = ({ data }) => {
  const navigate = useNavigate();
  const { id, judul, deskripsi, tingkat_pendidikan, timeline } = data || {};

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between mb-2">
          <span className="badge bg-primary">
            {tingkat_pendidikan || "N/A"}
          </span>
          <span className="text-muted" style={{ fontSize: "0.875rem" }}>
            Deadline: {timeline?.pendaftaran_berakhir || "Tidak tersedia"}
          </span>
        </div>
        <Card.Title>{judul || "Judul tidak ditemukan"}</Card.Title>
        <Card.Text>
          {deskripsi?.slice(0, 100) || "Deskripsi belum tersedia"}...
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/beasiswa/${id}`)}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardBeasiswa;
