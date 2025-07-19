// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedPeriod, setSelectedPeriod] = useState('monthly');
    const [showNotifications, setShowNotifications] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [inviteEmail, setInviteEmail] = useState('');
    const [teamMembers] = useState([
        { id: 1, name: 'Ammar Hassan', role: 'Team Lead', email: 'ammar@example.com', status: 'active' },
        { id: 2, name: 'Sarah Chen', role: 'Member', email: 'sarah@example.com', status: 'active' },
        { id: 3, name: 'Mike Johnson', role: 'Member', email: 'mike@example.com', status: 'pending' }
    ]);
    const [updateData, setUpdateData] = useState({
        source: '',
        amount: '',
        date: '',
        type: 'scope1'
    });

    const handleInviteMember = (e) => {
        e.preventDefault();
        // Here you would typically make an API call to send the invitation
        setIsUpdating(true);
        setTimeout(() => {
            setIsUpdating(false);
            setShowInviteModal(false);
            setInviteEmail('');
        }, 1000);
    };
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        setIsUpdating(true);
        // Here you would typically make an API call to update the data
        setTimeout(() => {
            setIsUpdating(false);
            setShowUpdateModal(false);
            setUpdateData({ source: '', amount: '', date: '', type: 'scope1' });
        }, 1000);
    };
    return (
        <div className="min-h-screen bg-gray-50" style={{ minHeight: '1024px' }}>
            {/* Top Navigation */}
            <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-globe text-emerald-600 text-xl"></i>
                            <span className="text-gray-900 font-semibold text-lg">CarbonScope</span>
                        </div>
                        <div className="flex items-center space-x-4 sm:space-x-6 overflow-x-auto whitespace-nowrap">
                            <button
                                className={`px-2 sm:px-3 py-2 text-sm font-medium cursor-pointer transition-colors ${activeTab === 'dashboard'
                                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                onClick={() => setActiveTab('dashboard')}
                            >
                                Dashboard
                            </button>
                            <button
                                className={`px-3 py-2 text-sm font-medium cursor-pointer transition-colors ${activeTab === 'emissions'
                                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                onClick={() => setActiveTab('emissions')}
                            >
                                Emissions Data
                            </button>
                            <button
                                className={`px-3 py-2 text-sm font-medium cursor-pointer transition-colors ${activeTab === 'reports'
                                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                onClick={() => setActiveTab('reports')}
                            >
                                Reports
                            </button>
                            <button
                                className={`px-3 py-2 text-sm font-medium cursor-pointer transition-colors ${activeTab === 'team'
                                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                onClick={() => setActiveTab('team')}
                            >
                                Team
                            </button>
                            <button
                                className={`px-3 py-2 text-sm font-medium cursor-pointer transition-colors ${activeTab === 'settings'
                                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                onClick={() => setActiveTab('settings')}
                            >
                                Settings
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button
                                className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                                onClick={() => setShowNotifications(!showNotifications)}
                            >
                                <i className="fas fa-bell text-lg"></i>
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                            </button>
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <h3 className="font-medium text-gray-900">Notifications</h3>
                                    </div>
                                    <div className="px-4 py-3">
                                        <div className="flex items-start space-x-3 mb-3">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                                            <div>
                                                <p className="text-sm text-gray-900">Monthly emissions report is ready</p>
                                                <p className="text-xs text-gray-500">2 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
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
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">AH</span>
                            </div>
                            <div className="text-sm">
                                <div className="text-gray-900 font-medium">Ammar Hassan</div>
                                <div className="text-gray-500">Admin</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Dashboard Header */}
                    <div className="mb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-4">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Carbon Emissions Dashboard</h1>
                                <p className="text-gray-600 mt-1">Monitor and analyze your organization's carbon footprint</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <button className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 !rounded-button text-sm hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                                        <span className="text-gray-700">{selectedPeriod === 'weekly' ? 'Weekly' : selectedPeriod === 'monthly' ? 'Monthly' : 'Yearly'}</span>
                                        <i className="fas fa-chevron-down text-gray-500"></i>
                                    </button>
                                </div>
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 !rounded-button text-sm flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                                    <i className="fas fa-plus"></i>
                                    <span>Add Data</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Key Metrics Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                                        <i className="fas fa-car text-emerald-600"></i>
                                    </div>
                                    <span className="text-gray-700 font-medium">Transport</span>
                                </div>
                                <i className="fas fa-info-circle text-gray-400 cursor-pointer"></i>
                            </div>
                            <div className="mb-2">
                                <span className="text-2xl font-bold text-gray-900">245</span>
                                <span className="text-sm text-gray-500 ml-1">kg CO₂e</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">-8.5%</span>
                                <span className="text-xs text-gray-500">vs last month</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <i className="fas fa-home text-orange-600"></i>
                                    </div>
                                    <span className="text-gray-700 font-medium">Home Energy</span>
                                </div>
                                <i className="fas fa-info-circle text-gray-400 cursor-pointer"></i>
                            </div>
                            <div className="mb-2">
                                <span className="text-2xl font-bold text-gray-900">180</span>
                                <span className="text-sm text-gray-500 ml-1">kg CO₂e</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">+5.2%</span>
                                <span className="text-xs text-gray-500">vs last month</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <i className="fas fa-shopping-cart text-blue-600"></i>
                                    </div>
                                    <span className="text-gray-700 font-medium">Consumption</span>
                                </div>
                                <i className="fas fa-info-circle text-gray-400 cursor-pointer"></i>
                            </div>
                            <div className="mb-2">
                                <span className="text-2xl font-bold text-gray-900">167</span>
                                <span className="text-sm text-gray-500 ml-1">kg CO₂e</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">-12.3%</span>
                                <span className="text-xs text-gray-500">vs last month</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <i className="fas fa-chart-pie text-purple-600"></i>
                                    </div>
                                    <span className="text-gray-700 font-medium">Total</span>
                                </div>
                                <i className="fas fa-info-circle text-gray-400 cursor-pointer"></i>
                            </div>
                            <div className="mb-2">
                                <span className="text-2xl font-bold text-gray-900">592</span>
                                <span className="text-sm text-gray-500 ml-1">kg CO₂e</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">-5.8%</span>
                                <span className="text-xs text-gray-500">vs last month</span>
                            </div>
                        </div>
                    </div>
                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
                        {/* Emissions Trend Chart */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Emissions Trend</h3>
                                <div className="flex items-center space-x-2">
                                    <button className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer">Scope 1</button>
                                    <button className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer">Scope 2</button>
                                    <button className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer">Scope 3</button>
                                </div>
                            </div>
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <i className="fas fa-chart-line text-4xl text-gray-300 mb-4"></i>
                                    <p className="text-gray-500">Chart visualization will be rendered here</p>
                                </div>
                            </div>
                        </div>
                        {/* Emissions by Source */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Emissions by Source</h3>
                                <button className="text-sm text-emerald-600 hover:text-emerald-700 cursor-pointer">View All</button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Transportation</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-900">2,340 tCO₂e</span>
                                        <span className="text-xs text-gray-500">25%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Energy</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-900">1,890 tCO₂e</span>
                                        <span className="text-xs text-gray-500">20%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Manufacturing</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-900">1,670 tCO₂e</span>
                                        <span className="text-xs text-gray-500">18%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Office Operations</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-900">1,120 tCO₂e</span>
                                        <span className="text-xs text-gray-500">12%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Waste</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-900">890 tCO₂e</span>
                                        <span className="text-xs text-gray-500">9%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Other</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-900">1,490 tCO₂e</span>
                                        <span className="text-xs text-gray-500">16%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Connected Apps & Leaderboard */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Connected Apps & Services</h3>
                                <button className="text-sm text-emerald-600 hover:text-emerald-700 cursor-pointer whitespace-nowrap !rounded-button">
                                    <i className="fas fa-plus mr-2"></i>Connect New
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <i className="fab fa-spotify text-blue-600 text-xl"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900">Spotify</h4>
                                        <p className="text-xs text-gray-500">Music streaming impact</p>
                                    </div>
                                    <button className="text-xs text-red-600 hover:text-red-700">Disconnect</button>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <i className="fab fa-uber text-blue-600 text-xl"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900">Uber</h4>
                                        <p className="text-xs text-gray-500">Transport tracking</p>
                                    </div>
                                    <button className="text-xs text-red-600 hover:text-red-700">Disconnect</button>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <i className="fab fa-amazon text-gray-600 text-xl"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900">Amazon</h4>
                                        <p className="text-xs text-gray-500">Shopping footprint</p>
                                    </div>
                                    <button className="text-sm text-emerald-600 hover:text-emerald-700">Connect</button>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <i className="fas fa-bolt text-gray-600 text-xl"></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900">Smart Meter</h4>
                                        <p className="text-xs text-gray-500">Energy usage</p>
                                    </div>
                                    <button className="text-sm text-emerald-600 hover:text-emerald-700">Connect</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
                                <button className="text-sm text-emerald-600 hover:text-emerald-700">View All</button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-emerald-600">1</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900">Sarah's Team</h4>
                                        <p className="text-xs text-gray-500">-45% this month</p>
                                    </div>
                                    <span className="text-sm font-medium text-emerald-600">125 kg</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-gray-600">2</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900">EcoWarriors</h4>
                                        <p className="text-xs text-gray-500">-38% this month</p>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">142 kg</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-gray-600">3</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900">GreenTech</h4>
                                        <p className="text-xs text-gray-500">-32% this month</p>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">156 kg</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-gray-600">4</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-gray-900">Your Ranking</h4>
                                        <p className="text-xs text-gray-500">Top 15%</p>
                                    </div>
                                    <span className="text-sm font-medium text-orange-600">189 kg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Management Section */}
                    {activeTab === 'team' && (
                        <div className="space-y-6">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
                                        <p className="text-sm text-gray-500 mt-1">Manage your team and track contributions</p>
                                    </div>
                                    <button
                                        onClick={() => setShowInviteModal(true)}
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 !rounded-button text-sm flex items-center space-x-2 whitespace-nowrap"
                                    >
                                        <i className="fas fa-user-plus"></i>
                                        <span>Invite Member</span>
                                    </button>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="border-b border-gray-200">
                                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Member</th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Role</th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Email</th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                                                <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {teamMembers.map((member) => (
                                                <tr key={member.id} className="border-b border-gray-100">
                                                    <td className="py-3 px-4">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                                                <span className="text-sm font-medium text-emerald-600">
                                                                    {member.name.charAt(0)}
                                                                </span>
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-900">{member.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        <span className="text-sm text-gray-500">{member.role}</span>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        <span className="text-sm text-gray-500">{member.email}</span>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        <span className={`text-xs px-2 py-1 rounded-full ${member.status === 'active'
                                                                ? 'bg-emerald-100 text-emerald-700'
                                                                : 'bg-orange-100 text-orange-700'
                                                            }`}>
                                                            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-4 text-right">
                                                        <button className="text-gray-400 hover:text-gray-600 mr-2">
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                        <button className="text-gray-400 hover:text-red-600">
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Team Statistics */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Performance</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-700">Team Average</span>
                                                <span className="text-sm text-emerald-600">156 kg CO₂e</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-700">Individual Best</span>
                                                <span className="text-sm text-emerald-600">98 kg CO₂e</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Goals</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900">Monthly Reduction</h4>
                                                <p className="text-xs text-gray-500 mt-1">Target: 15% reduction</p>
                                            </div>
                                            <span className="text-sm font-medium text-emerald-600">On Track</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900">Team Challenge</h4>
                                                <p className="text-xs text-gray-500 mt-1">5 days streak</p>
                                            </div>
                                            <span className="text-sm font-medium text-orange-600">2 days left</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Invite Member Modal */}
                    {showInviteModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Invite Team Member</h3>
                                    <button
                                        onClick={() => setShowInviteModal(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <form onSubmit={handleInviteMember}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={inviteEmail}
                                            onChange={(e) => setInviteEmail(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            placeholder="Enter email address"
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-end space-x-3">
                                        <button
                                            type="button"
                                            onClick={() => setShowInviteModal(false)}
                                            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 !rounded-button whitespace-nowrap"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm !rounded-button whitespace-nowrap"
                                            disabled={isUpdating}
                                        >
                                            {isUpdating ? 'Sending...' : 'Send Invitation'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Recent Activity & Targets */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Recent Activity */}
                        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                                <button className="text-sm text-emerald-600 hover:text-emerald-700 cursor-pointer">View All</button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                                        <i className="fas fa-plus text-emerald-600 text-xs"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-900">New emissions data added for Transportation</p>
                                        <div className="flex items-center space-x-4 mt-1">
                                            <span className="text-xs text-gray-500">2 hours ago</span>
                                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">+450 tCO₂e</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                                        <i className="fas fa-exclamation text-orange-600 text-xs"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-900">Energy consumption exceeded target by 15%</p>
                                        <div className="flex items-center space-x-4 mt-1">
                                            <span className="text-xs text-gray-500">1 day ago</span>
                                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Alert</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                                        <i className="fas fa-file-alt text-blue-600 text-xs"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-900">Monthly sustainability report generated</p>
                                        <div className="flex items-center space-x-4 mt-1">
                                            <span className="text-xs text-gray-500">2 days ago</span>
                                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Report</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                                        <i className="fas fa-target text-purple-600 text-xs"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-900">New carbon reduction target set for next quarter</p>
                                        <div className="flex items-center space-x-4 mt-1">
                                            <span className="text-xs text-gray-500">3 days ago</span>
                                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Target</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Carbon Reduction Targets */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Reduction Targets</h3>
                                <button className="text-sm text-emerald-600 hover:text-emerald-700 cursor-pointer">Edit</button>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">2025 Target</span>
                                        <span className="text-sm text-gray-500">75% achieved</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-gray-500">Reduce by 20%</span>
                                        <span className="text-xs text-emerald-600">On track</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">2030 Target</span>
                                        <span className="text-sm text-gray-500">45% achieved</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-gray-500">Reduce by 50%</span>
                                        <span className="text-xs text-orange-600">Needs attention</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">Net Zero</span>
                                        <span className="text-sm text-gray-500">15% achieved</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-gray-500">By 2050</span>
                                        <span className="text-xs text-red-600">Behind schedule</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default DashboardPage