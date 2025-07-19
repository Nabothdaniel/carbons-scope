import React from 'react'

const Features = () => {
    return (
        <div className="px-6 py-20 bg-black/20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Powerful Features for Your Business</h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">Advanced tools and analytics to help you track, manage, and reduce your carbon footprint effectively.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="text-emerald-400 mb-4">
                            <i className="fas fa-chart-line text-3xl"></i>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Real-time Analytics</h3>
                        <p className="text-white/70">Monitor your carbon emissions in real-time with our advanced dashboard and reporting tools.</p>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="text-emerald-400 mb-4">
                            <i className="fas fa-robot text-3xl"></i>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">AI-Powered Insights</h3>
                        <p className="text-white/70">Get intelligent recommendations for reducing emissions based on your usage patterns.</p>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="text-emerald-400 mb-4">
                            <i className="fas fa-file-alt text-3xl"></i>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-3">Automated Reporting</h3>
                        <p className="text-white/70">Generate comprehensive reports for stakeholders and regulatory compliance.</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Features
