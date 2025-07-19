import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBell, FaGlobe, FaBars } from 'react-icons/fa';
import { MdDashboard, MdOutlineReport, MdPeople, MdSettings, MdEco } from 'react-icons/md';

const Header = ({ showNotifications, setShowNotifications }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: 'dashboard', path: '/dashboard', icon: <MdDashboard />, label: 'Dashboard' },
    { name: 'emissions', path: '/dashboard/emission', icon: <MdEco />, label: 'Emissions Data' },
    { name: 'reports', path: '/dashboard/reports', icon: <MdOutlineReport />, label: 'Reports' },
    { name: 'team', path: '/dashboard/teams', icon: <MdPeople />, label: 'Team' },
    { name: 'settings', path: '/dashboard/settings', icon: <MdSettings />, label: 'Settings' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 shadow">

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-8 flex-wrap">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FaGlobe className="text-emerald-600 text-xl" />
            <span className="text-gray-900 font-semibold text-lg">CarbonScope</span>
          </div>

          {/* Nav Tabs - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => navigate(tab.path)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive(tab.path)
                  ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Bell + Avatar */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-900 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <FaBell className="text-xl" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </button>

            {showNotifications && (
              <div className="absolute top-full left-1/2 sm:left-auto sm:right-0 transform -translate-x-60 sm:translate-x-0 mt-3 w-80 max-w-[95vw] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-all duration-200">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-medium text-gray-900">Notifications</h3>
                </div>
                <div className="px-4 py-3 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900">Monthly emissions report is ready</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900">Scope 2 emissions increased by 15%</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>

            )}
          </div>

          {/* User Avatar + Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">AH</span>
            </div>
            <div className="hidden sm:block text-sm">
              <div className="text-gray-900 font-medium">Ammar Hassan</div>
              <div className="text-gray-500 text-xs">Admin</div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu: Tabs */}
      {isSidebarOpen && (
        <div className="relative">
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-white rounded-b-lg shadow-md z-50 overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="p-4 space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => {
                    navigate(tab.path);
                    setIsSidebarOpen(false);
                  }}
                  className={`flex items-center gap-2 text-sm font-medium w-full text-left ${isActive(tab.path)
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-gray-900'
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
