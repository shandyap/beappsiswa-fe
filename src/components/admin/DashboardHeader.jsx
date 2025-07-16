import React from 'react';
import { Button } from 'react-bootstrap';
import { BsBoxArrowRight } from 'react-icons/bs'; 

const DashboardHeader = ({ onLogout }) => {
  return (
    <div className="dashboard-header">
      <div className="header-text">
        <h3>Selamat Datang, Admin!</h3>
        <p>Berikut adalah ringkasan aktivitas terbaru di sistem BeAppsiswa.</p>
      </div>
      <div className="header-action">
        <Button variant="outline-danger" onClick={onLogout}>
          <BsBoxArrowRight className="me-2" /> Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;