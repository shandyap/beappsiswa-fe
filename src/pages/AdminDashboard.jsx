import {React, useState} from 'react';
import { useAuth } from '../context/AuthContext'; // Impor hook Auth
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/admin/DashboardHeader'; 
import QuickActions from '../components/admin/QuickActions';
import '../components/admin/admin.css'; 
import SearchBar from '../components/SearchBar';
import TabManagement from '../components/admin/TabManagement';
import AddBeasiswaModal from '../components/admin/AddBeasiswaModal';
import AddPerlombaanModal from '../components/admin/AddPerlombaanModal';
import EditBeasiswaModal from '../components/admin/EditBeasiswaModal';
import EditPerlombaanModal from '../components/admin/EditPerlombaanModal';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // State untuk searchbar
  const [searchTerm, setSearchTerm] = useState('');

  // State untuk mengontrol visibilitas modal
  const [showBeasiswaModal, setShowBeasiswaModal] = useState(false);
  const [showLombaModal, setShowLombaModal] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const [showEditBeasiswaModal, setShowEditBeasiswaModal] = useState(false);
  const [editingBeasiswa, setEditingBeasiswa] = useState(null);

  const [showEditPerlombaanModal, setShowEditPerlombaanModal] = useState(false);
  const [editingPerlombaan, setEditingPerlombaan] = useState(null);

  const handleSuccess = () => {
    setRefreshTrigger(currentValue => currentValue + 1);
  };
  
  const handleLogout = () => {
    logout(); 
    navigate('/admin'); 
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleOpenEditBeasiswa = (beasiswa) => {
    setEditingBeasiswa(beasiswa);
    setShowEditBeasiswaModal(true);
  };

  const handleOpenEditPerlombaan = (perlombaan) => {
    setEditingPerlombaan(perlombaan);
    setShowEditPerlombaanModal(true);
  };



  return (
    <div className="admin-layout">
      <main className="admin-content container py-4">
        <DashboardHeader onLogout={handleLogout} />
        <QuickActions 
          onAddBeasiswaClick={() => setShowBeasiswaModal(true)}
          onAddLombaClick={() => setShowLombaModal(true)}
        />
        <SearchBar onSearch={handleSearch} placeholderText="Cari berdasarkan judul..." />
        <TabManagement 
          refreshTrigger={refreshTrigger} 
          onEditBeasiswa={handleOpenEditBeasiswa}
          onEditPerlombaan={handleOpenEditPerlombaan}
          onDataRefresh={handleSuccess}
          searchTerm={searchTerm} 
        />
      </main>

        <AddBeasiswaModal 
          show={showBeasiswaModal} 
          onHide={() => setShowBeasiswaModal(false)}
          onSuccess={handleSuccess} 
        />
        <AddPerlombaanModal 
          show={showLombaModal} 
          onHide={() => setShowLombaModal(false)} 
          onSuccess={handleSuccess}
        />

        <EditBeasiswaModal 
          show={showEditBeasiswaModal}
          onHide={() => setShowEditBeasiswaModal(false)}
          onSuccess={handleSuccess}
          scholarshipData={editingBeasiswa}
        />

        <EditPerlombaanModal
          show={showEditPerlombaanModal}
          onHide={() => setShowEditPerlombaanModal(false)}
          onSuccess={handleSuccess}
          competitionData={editingPerlombaan}
        />

    </div>
  );
};

export default AdminDashboard;