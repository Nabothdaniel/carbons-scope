import Header from "../components/ui/Header";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import WhyChooseUs from "../components/landing/why-choose-us";
import CTA from "../components/landing/CTA";
import Footer from "../components/ui/Footer";
import Pricing from "../components/landing/Pricing";
import AboutUs from "../components/landing/about-us";
import MeetTheTeam from "../components/landing/meet-the-team";

const LandingPage = () => {


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900" style={{ minHeight: '1024px' }}>
            {/* Header (Always First for Navigation) */}
            <Header />

            {/* Hero Section (Your main value prop) */}
            <Hero />

            {/* Call to Action #1 (optional quick CTA to push early conversions) */}
            <CTA showInline={true} />

            {/* About Us (Storytelling—who are you?) */}
            <AboutUs />

            {/* Why Choose Us (Build trust, your unique edge) */}
            <WhyChooseUs />

            {/* Features (Show off product capabilities) */}
            <Features />

            {/* Pricing (Immediately after features—what’s the cost?) */}
            <Pricing />

            {/* Meet the Team (Human connection, credibility) */}
            <MeetTheTeam />

            {/* Call to Action #2 (strong close before footer) */}
            <CTA />

            {/* Footer (Links, contacts, socials, legal) */}
            <Footer />
        </div>

    )
}

export default LandingPage
