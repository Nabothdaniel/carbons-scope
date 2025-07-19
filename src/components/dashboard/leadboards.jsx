
const LeadBoards = () => {
    return (
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
    )
}

export default LeadBoards
