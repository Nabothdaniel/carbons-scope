
const EmissionSource = () => {
    return (
        <>
        {/* Emissions by Source */ }
        < div className = "bg-white rounded-lg shadow-sm border border-gray-200 p-6" >
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
            </div >
            </>
  )
}

export default EmissionSource
