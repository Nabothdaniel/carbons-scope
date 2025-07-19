
const TeamStatistics = () => {
    return (
        <div>
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
    )
}

export default TeamStatistics
