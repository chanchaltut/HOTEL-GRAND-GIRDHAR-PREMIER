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
        <section id="gallery" className={`w-full ${isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]'} py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="text-[#D4AF37] text-xs md:text-sm font-sans uppercase tracking-wider font-medium mb-3">
                        DISCOVER
                    </div>
                    <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-4`}>
                        Visual Journey
                    </h2>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm md:text-base lg:text-lg max-w-2xl mx-auto`}>
                        Immerse yourself in the luxury and comfort of Hotel Grand Girdhar Premier
                    </p>
                </div>

                {/* Image Gallery - Horizontal Scrollable */}
                <div className="mb-10 md:mb-12 lg:mb-16">
                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 hide-scrollbar">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[280px] md:w-[350px] lg:w-[400px] h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg"
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
                    <button className="bg-[#D4AF37] text-[#0F0F0E] px-10 md:px-14 py-4 md:py-5 rounded-full font-sans font-semibold text-sm md:text-base lg:text-lg hover:bg-[#C19B2A] transition-colors shadow-lg flex items-center gap-2">
                        <span>View Full Gallery</span>
                        <svg
                            className="w-5 h-5 md:w-6 md:h-6"
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

