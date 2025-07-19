import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage from "../../assets/landing/carbon-scope-img.png";

const Hero = () => {
    const [email, setEmail] = useState("");
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.fromTo(
            imageRef.current,
            {
                y: 0,
                opacity: 0.8,
                scale: 0.95,
                rotate: -2,
            },
            {
                y: -20,
                opacity: 1,
                scale: 1.05,
                rotate: 2,
                duration: 3,
                ease: "power2.inOut",
            }
        );
    }, []);

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                {/* Early Access Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-bounce">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-white/90 text-sm">Building in progress</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Track Your Carbon Impact with
                    <span className="text-emerald-400 block mt-2">Precision Analytics!</span>
                </h1>

                <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                    A smart solution for startups, remote teams, and small businesses to track and reduce the carbon impact of their digital operations — helping you go green without slowing down.
                </p>


                {/* Email Capture Form */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto mb-12">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full sm:flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-sm"
                    />
                    <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                        Join Waiting List
                    </button>
                </div>

                {/* Hero Image with GSAP Animation */}
                <div className="flex justify-center">
                    <img
                        ref={imageRef}
                        src={heroImage}
                        alt="Floating Hero"
                        className="w-full max-w-[700px] md:w-[80%] lg:w-[60%] h-auto drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;
