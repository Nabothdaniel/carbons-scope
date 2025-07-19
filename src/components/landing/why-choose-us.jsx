
const WhyChooseUs = ()=>{
    return(
        <>
          {/* Benefits Section */}
            <div className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Why Choose CarbonScope?</h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">Join hundreds of businesses making data-driven decisions for a sustainable future.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="text-emerald-400 mt-1">
                                <i className="fas fa-check-circle text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                                <p className="text-white/70">Track all three scopes of emissions with detailed breakdowns and analysis.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-emerald-400 mt-1">
                                <i className="fas fa-check-circle text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-semibold mb-2">Easy Integration</h3>
                                <p className="text-white/70">Seamlessly connect with your existing systems and data sources.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-emerald-400 mt-1">
                                <i className="fas fa-check-circle text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-semibold mb-2">Regulatory Compliance</h3>
                                <p className="text-white/70">Stay compliant with global carbon reporting standards and regulations.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-emerald-400 mt-1">
                                <i className="fas fa-check-circle text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-semibold mb-2">Expert Support</h3>
                                <p className="text-white/70">Get dedicated support from our team of sustainability experts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default WhyChooseUs