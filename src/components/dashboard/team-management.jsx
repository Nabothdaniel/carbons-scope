


const TeamManagement = ({activeTab,teamMembers}) => {
  
    return (
        <section>
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
                </div>
            )}
        </section>
    );
};

export default TeamManagement;
