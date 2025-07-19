// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState } from 'react';
import Header from '../../components/dashboard/Header';
import DashboardHeader from '../../components/dashboard/dashboard-header';
import MetricCards from '../../components/dashboard/metric-cards';
import ChartsSection from '../../components/dashboard/charts-section'
import ConnectedApps from '../../components/dashboard/connected-apps';
import TeamManagement from '../../components/dashboard/team-management';
import ShowInviteModalSection from '../../components/dashboard/show-invite-modal';
import RecentActivity from '../../components/dashboard/recent-activity';
import CarbonReductionTargets from '../../components/dashboard/carbon-reduction-targets';
const DashboardPage = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('monthly');
    const [isUpdating, setIsUpdating] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
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
            <div className="flex-1 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Dashboard Header */}
                    <DashboardHeader selectedPeriod={selectedPeriod} />
                    {/* Key Metrics Cards */}
                    <MetricCards />

                    {/* Charts Section */}
                    <ChartsSection />
                    {/* Connected Apps & Leaderboard */}
                    <ConnectedApps />
                    {/**Team managment */}
                    <TeamManagement activeTab={activeTab} teamMembers={teamMembers} />

                    {/* Team Statistics */}



                    {/* Invite Member Modal */}
                    <ShowInviteModalSection showInviteModal={showInviteModal} setShowInviteModal={setShowInviteModal} handleInviteMember={handleInviteMember} inviteEmail={inviteEmail} setInviteEmail={setInviteEmail} isUpdating={isUpdating} />
                    {/* Recent Activity & Targets */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Recent Activity */}
                        <RecentActivity />
                        {/* Carbon Reduction Targets */}
                        <CarbonReductionTargets />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashboardPage;