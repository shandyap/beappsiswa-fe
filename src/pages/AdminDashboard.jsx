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

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // State untuk mengontrol visibilitas modal
  const [showBeasiswaModal, setShowBeasiswaModal] = useState(false);
  const [showLombaModal, setShowLombaModal] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleSuccess = () => {
    // Menambah nilai state ini akan memicu useEffect di TabManagement
    setRefreshTrigger(currentValue => currentValue + 1);
  };
  const handleLogout = () => {
    logout(); 
    navigate('/admin'); 
  };



  return (
    <div className="admin-layout">
      <main className="admin-content container py-4">
        <DashboardHeader onLogout={handleLogout} />
        <QuickActions 
          onAddBeasiswaClick={() => setShowBeasiswaModal(true)}
          onAddLombaClick={() => setShowLombaModal(true)}
        />
        <TabManagement refreshTrigger={refreshTrigger} />
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

    </div>
  );
};

export default AdminDashboard;