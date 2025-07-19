
const CarbonReductionTargets = () => {
    return (
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
    )
}

export default CarbonReductionTargets
