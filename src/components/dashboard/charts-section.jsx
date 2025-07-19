import EmissionSource from "./emssion-source"

const ChartsSection = () => {
    return (
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
            <EmissionSource/>
        </div>
    )
}

export default ChartsSection
