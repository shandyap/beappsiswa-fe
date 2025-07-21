import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils";

const BeasiswaCard = ({ data, index }) => {
  const colorThemes = ["beasiswa", "perlombaan", "accent"];
  const theme = colorThemes[index % colorThemes.length];

  return (
    <div className={`card-beasiswa ${theme}`}>
      <div className="card-header">
        <div className="tags-container">
          {data.tingkat_pendidikan.map((level, i) => (
            <span key={i} className={`tag ${theme}`}>
              {level}
            </span>
          ))}
        </div>
        <span className="deadline">
          Deadline: {formatDate(data.timeline?.pendaftaran_berakhir)}
        </span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{data.judul}</h3>
        <p className="card-description">{data.deskripsi}</p>
      </div>
      <div className="card-footer">
        <Link to={`/beasiswa/${data.id}`}>
          <Button className={`btn-card ${theme}`}>Lihat Beasiswa</Button>
        </Link>
      </div>
    </div>
  );
};

export default BeasiswaCard;
