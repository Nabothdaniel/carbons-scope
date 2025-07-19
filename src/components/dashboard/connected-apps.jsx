import { useState } from 'react';
import {
  FaGoogle,
  FaSlack,
  FaGithub,
  FaVideo,
  FaBolt,
  FaPlus,
  FaTimes,
} from 'react-icons/fa';
import LeadBoards from './leadboards';

const allServices = [
  { name: 'Google Workspace', icon: <FaGoogle className="text-blue-600" /> },
  { name: 'Zoom', icon: <FaVideo className="text-purple-600" /> },
  { name: 'Slack', icon: <FaSlack className="text-indigo-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-700" /> },
  { name: 'Smart Meter', icon: <FaBolt className="text-emerald-600" /> },
];

const ConnectedApps = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [connectedServices, setConnectedServices] = useState([
    'Google Workspace', // Example default connected
  ]);

  const handleConnect = (serviceName) => {
    if (!connectedServices.includes(serviceName)) {
      setConnectedServices([...connectedServices, serviceName]);
      // TODO: Call backend API to store this user's connected services
    }
    setShowDropdown(false);
  };

  const handleDisconnect = (serviceName) => {
    setConnectedServices(connectedServices.filter((name) => name !== serviceName));
    // TODO: Call backend API to update user's connected services
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
      <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Connected Apps & Services</h3>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-2"
          >
            <FaPlus /> Connect New
          </button>
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute top-20 right-6 w-72 bg-white border border-gray-200 shadow-lg rounded-xl z-50 p-4 transition duration-200 animate-fade-in-down">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-gray-800">Available Services</h4>
              <button
                onClick={() => setShowDropdown(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="space-y-3 max-h-60 overflow-y-auto">
              {allServices
                .filter((service) => !connectedServices.includes(service.name))
                .map((service, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition"
                    onClick={() => handleConnect(service.name)}
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                      {service.icon}
                    </div>
                    <span className="text-sm text-gray-700">{service.name}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Connected Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {connectedServices.map((serviceName) => {
            const service = allServices.find((s) => s.name === serviceName);
            return (
              <div
                key={serviceName}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  {service?.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{serviceName}</h4>
                  <p className="text-xs text-gray-500">Tracking enabled</p>
                </div>
                <button
                  onClick={() => handleDisconnect(serviceName)}
                  className="text-xs text-red-600 hover:text-red-700"
                >
                  Disconnect
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right side widget */}
      <LeadBoards />
    </div>
  );
};

export default ConnectedApps;
