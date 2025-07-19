import { useState } from 'react';
import {
  FaChevronDown,
  FaPlug,
  FaUserPlus,
  FaCrown,
  FaBullseye,
} from 'react-icons/fa';

const DashboardHeader = ({ selectedPeriod = 'Weekly', setSelectedPeriod }) => {
  const [showActions, setShowActions] = useState(false);
  const [showPeriods, setShowPeriods] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const periods = ['Daily', 'Weekly', 'Monthly'];

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setShowPeriods(false);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Title + Description */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Carbon Emissions Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor and analyze your organization's carbon footprint
          </p>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center flex-wrap gap-3 relative z-40">
          {/* Period Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => {
                setShowPeriods(!showPeriods);
                setShowActions(false);
              }}
              className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 text-gray-700"
            >
              <span>{selectedPeriod}</span>
              <FaChevronDown
                className={`transition-transform ${
                  showPeriods ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showPeriods && (
              <div className="absolute left-1/2 sm:left-auto sm:right-0 transform -translate-x-1/2 sm:translate-x-0 mt-2 w-40 max-w-[90vw] bg-white border rounded-lg shadow-lg z-50 transition-all duration-200">
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => handlePeriodChange(period)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {period}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Actions Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => {
                setShowActions(!showActions);
                setShowPeriods(false);
              }}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              <span>Actions</span>
              <FaChevronDown
                className={`transition-transform ${
                  showActions ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showActions && (
              <div className="absolute left-1/2 sm:left-auto sm:right-0 transform -translate-x-1/2 sm:translate-x-0 mt-3 min-w-[16rem] max-w-[90vw] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50 transition-all duration-200">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-medium text-gray-900">Quick Actions</h3>
                </div>

                <div className="px-4 py-3 space-y-3">
                  {/* Connect Tools */}
                  <div className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                    <FaPlug className="text-emerald-500 mt-1" />
                    <div>
                      <p className="text-sm text-gray-900">Connect Tools</p>
                      <p className="text-xs text-gray-500">
                        Integrate with your favorite tools
                      </p>
                    </div>
                  </div>

                  {/* Add Team Member */}
                  <div className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                    <FaUserPlus className="text-blue-500 mt-1" />
                    <div>
                      <p className="text-sm text-gray-900">Add Team Member</p>
                      <p className="text-xs text-gray-500">
                        Collaborate with your team
                      </p>
                    </div>
                  </div>

                  {/* Upgrade Plan */}
                  <div className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                    <FaCrown className="text-yellow-500 mt-1" />
                    <div>
                      <p className="text-sm text-gray-900">Upgrade Plan</p>
                      <p className="text-xs text-gray-500">
                        Access more powerful features
                      </p>
                    </div>
                  </div>

                  {/* Set Goals - Coming Soon */}
                  <div
                    className="relative"
                    onMouseEnter={() => setShowComingSoon(true)}
                    onMouseLeave={() => setShowComingSoon(false)}
                  >
                    <div className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                      <FaBullseye className="text-purple-500 mt-1" />
                      <div>
                        <p className="text-sm text-gray-900">Set Goals</p>
                        <p className="text-xs text-gray-500">
                          Define your target emissions
                        </p>
                      </div>
                    </div>

                    {showComingSoon && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 shadow-md rounded-lg z-50 text-center px-3 py-2 text-sm text-gray-600">
                        🚧 Coming soon...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
