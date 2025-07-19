
const Footer = () => {
    return (
        <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <i className="fas fa-globe text-emerald-400 text-xl"></i>
                            <span className="text-white font-semibold text-lg">CarbonScope</span>
                        </div>
                        <p className="text-white/60">Empowering businesses to track and reduce their carbon footprint.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
                    <p>&copy; {new Date().getFullYear()} CarbonScope. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
