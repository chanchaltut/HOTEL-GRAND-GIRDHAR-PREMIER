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
                <div className="flex-1 flex flex-col items-center justify-center px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                    <div className="w-full max-w-5xl mx-auto text-center">

                        {/* Main Title */}
                        <h1 className="text-white font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal tracking-wide mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
                            HOTEL GRAND GIRDHAR PREMIER
                        </h1>

                        {/* Tagline */}
                        <p className="text-[#D4AF37] font-sans text-xs xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium tracking-wider mb-4 xs:mb-5 sm:mb-6 md:mb-8 px-2">
                            STAY • COMFORT • LUXURY
                        </p>

                        {/* Descriptive Text */}
                        <p className="text-white font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl max-w-2xl mx-auto leading-relaxed mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 px-3 xs:px-4">
                            Experience premium hospitality in the heart of Indore. Located in Vijay Nagar, just minutes from the railway station and Khajrana Ganesh Mandir.
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 px-3 xs:px-4">
                            <button className="w-full xs:w-auto bg-[#8B6F47] text-white px-6 xs:px-7 sm:px-8 md:px-10 lg:px-12 py-2.5 xs:py-3 sm:py-3 md:py-3.5 rounded-lg text-xs xs:text-sm sm:text-sm md:text-base lg:text-base font-sans font-medium hover:bg-[#7A5F3A] transition-colors">
                                Explore Rooms
                            </button>
                            <button className="w-full xs:w-auto border-2 border-white text-white bg-transparent px-6 xs:px-7 sm:px-8 md:px-10 lg:px-12 py-2.5 xs:py-3 sm:py-3 md:py-3.5 rounded-lg text-xs xs:text-sm sm:text-sm md:text-base lg:text-base font-sans font-medium hover:bg-white/10 transition-colors">
                                Virtual Tour
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Bottom Center */}
                <div className="absolute bottom-2 xs:bottom-8 sm:bottom-6 md:bottom-4 lg:bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 xs:gap-2">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center">
                        <svg
                            className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white animate-bounce"
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
                    <span className="text-white text-[10px] xs:text-xs sm:text-xs md:text-sm font-sans uppercase tracking-wider">
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
