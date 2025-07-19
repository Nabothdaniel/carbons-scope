
const RecentActivity = () => {
    return (
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
    )
}

export default RecentActivity
