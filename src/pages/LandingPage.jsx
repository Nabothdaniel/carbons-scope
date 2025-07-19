import Header from "../components/ui/Header";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import WhyChooseUs from "../components/landing/why-choose-us";
import CTA from "../components/landing/CTA";
import Footer from "../components/ui/Footer";
import Pricing from "../components/landing/Pricing";
import AboutUs from "../components/landing/about-us";

const LandingPage = () => {


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900" style={{ minHeight: '1024px' }}>
            {/*Header section */}
            <Header />
            {/* Hero Section */}
            <Hero />

            {/**about us */}
            <AboutUs />

            {/* Features Section */}
            <Features />
            <Pricing />

            <WhyChooseUs />

            {/* CTA Section */}
            <CTA />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default LandingPage
