
const Header = () => {
    return (
        <>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-globe text-emerald-400 text-xl"></i>
                            <span className="text-white font-semibold text-lg">CarbonScope</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-white/90 hover:text-white transition-colors cursor-pointer">Home</a>
                            <a href="#" className="text-white/90 hover:text-white transition-colors cursor-pointer">Pricing</a>
                            <a href="#" className="text-white/90 hover:text-white transition-colors cursor-pointer">Features</a>
                            <a href="#" className="text-white/90 hover:text-white transition-colors cursor-pointer">About Us</a>
                        </div>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 !rounded-button transition-colors whitespace-nowrap cursor-pointer">
                            Join Waiting List
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
