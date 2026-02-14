const HotelGuestArea = () => {
    return (
        <section className="w-full bg-[#F5F3F0] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Curved Lines - Hand-drawn style squiggles */}
            <svg
                className="absolute bottom-32 left-8 md:left-16 lg:left-24 w-40 md:w-56 lg:w-72 opacity-20 pointer-events-none hidden md:block"
                viewBox="0 0 300 150"
                fill="none"
                stroke="#9A9A9A"
                strokeWidth="0.8"
            >
                <path
                    d="M 20 80 Q 60 50, 100 70 Q 140 90, 180 75 Q 220 60, 260 70"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <svg
                className="absolute bottom-16 right-8 md:right-16 lg:right-24 w-32 md:w-40 lg:w-48 opacity-20 pointer-events-none hidden md:block"
                viewBox="0 0 200 100"
                fill="none"
                stroke="#9A9A9A"
                strokeWidth="0.8"
            >
                <path
                    d="M 10 50 Q 40 30, 70 45 Q 100 60, 130 50"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-8 md:mb-12 lg:mb-16">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
                    {/* Top Left */}
                    <div className="text-xs md:text-sm font-sans uppercase tracking-wide text-gray-700">
                        GRAND GIRDHAR PREMIER, 2024
                    </div>

                    {/* Top Center */}
                    <div className="text-xs md:text-sm font-sans uppercase tracking-wide text-gray-700">
                        (HOTEL OBJECTS)
                    </div>

                    {/* Top Right */}
                    <div className="text-left md:text-right">
                        <div className="text-xs md:text-sm font-sans text-gray-700 mb-1">
                            (01) Lobby
                        </div>
                        <div className="text-[10px] md:text-xs font-sans uppercase tracking-wide text-gray-600">
                            HOTEL GRAND GIRDHAR PREMIER, INDORE
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Three Images */}
            <div className="max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-20 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {/* Left Image */}
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img
                            src="/restaurant-lounge.jpg"
                            alt="Restaurant lounge with wooden slats"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Central Image - Larger with Text Overlay */}
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden md:col-span-1">
                        <img
                            src="/about.jpeg"
                            alt="Hotel lobby with suspended tree"
                            className="w-full h-full object-cover"
                        />

                        {/* Text Overlay - HOTEL in white on image */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
                            <div className="text-center">
                                <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-white mb-0 leading-[0.9]">
                                    HOTEL
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                        <img
                            src="/outdoor-terrace.jpg"
                            alt="Outdoor terrace with modern furniture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* GUEST AREA in black, positioned to overlap image and background */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:translate-y-1/3 pointer-events-none z-20">
                    <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-black leading-[0.9] whitespace-nowrap">
                        GUEST AREA
                    </h2>
                </div>
            </div>

            {/* Bottom Section - Description and Button */}
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                    {/* Descriptive Text */}
                    <div className="flex-1 max-w-2xl">
                        <p className="text-sm md:text-base lg:text-lg font-sans font-light text-gray-600 leading-relaxed">
                            The powerful tree permeates five stories. Its organic silhouette creates a contrast with the rhythmical geometry of the interior design.
                        </p>
                    </div>

                    {/* Learn More Button */}
                    <button className="px-6 md:px-8 lg:px-10 py-3 md:py-3.5 text-xs md:text-sm font-sans uppercase tracking-wide text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 whitespace-nowrap">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HotelGuestArea

