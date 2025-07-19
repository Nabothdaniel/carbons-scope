import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/dashboard/Header';

const DashboardIndex = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} showNotifications={showNotifications} setShowNotifications={setShowNotifications} />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardIndex;
