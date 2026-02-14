import Navbar from './Navbar'
import ChatWidget from './ChatWidget'

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/hero.jpeg)'
                }}
            >
                {/* Blurry overlay */}
                <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: 'rgba(15, 15, 14, 0.5)' }}></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex-1 flex flex-col">
                {/* Navigation Bar */}
                <Navbar />

                {/* Main Content - Centered */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-5xl mx-auto text-center">

                        {/* Main Title */}
                        <h1 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-wide mb-4 md:mb-6 leading-tight">
                            HOTEL GRAND GIRDHAR PREMIER
                        </h1>

                        {/* Tagline */}
                        <p className="text-[#D4AF37] font-sans text-sm md:text-base lg:text-lg xl:text-xl font-medium tracking-wider mb-6 md:mb-8">
                            STAY • COMFORT • LUXURY
                        </p>

                        {/* Descriptive Text */}
                        <p className="text-white font-sans text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 lg:mb-12">
                            Experience premium hospitality in the heart of Indore. Located in Vijay Nagar, just minutes from the railway station and Khajrana Ganesh Mandir.
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                            <button className="bg-[#8B6F47] text-white px-8 md:px-10 py-3 md:py-3.5 rounded-lg text-sm md:text-base font-sans font-medium hover:bg-[#7A5F3A] transition-colors">
                                Explore Rooms
                            </button>
                            <button className="border-2 border-white text-white bg-transparent px-8 md:px-10 py-3 md:py-3.5 rounded-lg text-sm md:text-base font-sans font-medium hover:bg-white/10 transition-colors">
                                Virtual Tour
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Bottom Center */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center">
                        <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-white animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                    <span className="text-white text-xs md:text-sm font-sans uppercase tracking-wider">
                        EXPLORE BELOW
                    </span>
                </div>

                {/* Chat Widget - Bottom Right */}
                <ChatWidget />
            </div>
        </section>
    )
}

export default Hero
