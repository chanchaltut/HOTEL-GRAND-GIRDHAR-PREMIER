import { useTheme } from '../contexts/ThemeContext'

const VisualJourney = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    
    // Using available images - in a real scenario, you'd have 6+ unique images
    const galleryImages = [
        { src: '/hero.jpeg', alt: 'Hotel Grand Girdhar Premier exterior at night' },
        { src: '/about.jpeg', alt: 'Hotel building with entrance' },
        { src: '/bed.jpeg', alt: 'Hotel architecture' },
        { src: '/hero.jpeg', alt: 'Hotel lobby' },
        { src: '/about.jpeg', alt: 'Hotel grounds' },
        { src: '/bed.jpeg', alt: 'Hotel building' },
    ]

    return (
        <section id="gallery" className={`w-full pattern-bg ${isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]'} py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12`}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="text-[#D4AF37] text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-sans uppercase tracking-wider font-medium mb-2 xs:mb-2.5 sm:mb-3">
                        DISCOVER
                    </div>
                    <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} font-serif text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-3 xs:mb-3.5 sm:mb-4 px-2`}>
                        Visual Journey
                    </h2>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl max-w-2xl mx-auto px-3 xs:px-4`}>
                        Immerse yourself in the luxury and comfort of Hotel Grand Girdhar Premier
                    </p>
                </div>

                {/* Image Gallery - Horizontal Scrollable */}
                <div className="mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
                    <div className="flex gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto pb-3 xs:pb-3.5 sm:pb-4 hide-scrollbar">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[220px] xs:w-[250px] sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[380px] 2xl:w-[400px] h-[280px] xs:h-[320px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[480px] 2xl:h-[500px] rounded-xl overflow-hidden shadow-lg"
                            >
                                <div className="relative w-full h-full">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <button className="bg-[#D4AF37] text-[#0F0F0E] px-6 xs:px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-4.5 xl:py-5 rounded-full font-sans font-semibold text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl hover:bg-[#C19B2A] transition-colors shadow-lg flex items-center gap-1.5 xs:gap-2">
                        <span>View Full Gallery</span>
                        <svg
                            className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default VisualJourney

