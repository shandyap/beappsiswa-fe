import {React, useState} from 'react';
import { useAuth } from '../context/AuthContext'; // Impor hook Auth
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/admin/DashboardHeader'; 
import QuickActions from '../components/admin/QuickActions';
import '../components/admin/admin.css'; 
import { Tab } from 'react-bootstrap';
import TabManagement from '../components/admin/TabManagement';
import AddBeasiswaModal from '../components/admin/AddBeasiswaModal';
import AddPerlombaanModal from '../components/admin/AddPerlombaanModal';
import EditBeasiswaModal from '../components/admin/EditBeasiswaModal';
import EditPerlombaanModal from '../components/admin/EditPerlombaanModal';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // State untuk mengontrol visibilitas modal
  const [showBeasiswaModal, setShowBeasiswaModal] = useState(false);
  const [showLombaModal, setShowLombaModal] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const [showEditBeasiswaModal, setShowEditBeasiswaModal] = useState(false);
  const [editingBeasiswa, setEditingBeasiswa] = useState(null);

  const [showEditPerlombaanModal, setShowEditPerlombaanModal] = useState(false);
  const [editingPerlombaan, setEditingPerlombaan] = useState(null);

  const handleSuccess = () => {
    // Menambah nilai state ini akan memicu useEffect di TabManagement
    setRefreshTrigger(currentValue => currentValue + 1);
  };
  
  const handleLogout = () => {
    logout(); 
    navigate('/admin'); 
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
        <TabManagement 
          refreshTrigger={refreshTrigger} 
          onEditBeasiswa={handleOpenEditBeasiswa}
          onEditPerlombaan={handleOpenEditPerlombaan}
          onDataRefresh={handleSuccess}/>
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