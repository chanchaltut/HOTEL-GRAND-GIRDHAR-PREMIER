import { useTheme } from '../contexts/ThemeContext'

const About = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Prime Location",
            description: "57-A Medanta Main Road, Vijay Nagar, Indore."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: "Near Railway Station",
            description: "Just 10 minutes drive from Indore railway station."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Temple & Shopping",
            description: "15 min walk to Khajrana Ganesh Mandir, near C21 Mall."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            title: "4-Star Luxury",
            description: "Premium amenities with free WiFi & parking."
        }
    ]

    return (
        <section id="about" className={`w-full ${isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]'} py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Section - Text Content */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Header */}
                        <div className="text-[#D4AF37] text-xs md:text-sm font-sans uppercase tracking-wider font-medium">
                            ABOUT OUR HOTEL
                        </div>

                        {/* Title */}
                        <div>
                            <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-3 pb-2 border-b border-[#D4AF37] inline-block`}>
                                About Hotel Grand Girdhar Premier
                            </h2>
                            <p className="text-[#D4AF37] font-sans text-base md:text-lg mt-4">
                                Your Gateway to Indore's Premier Hospitality
                            </p>
                        </div>

                        {/* Descriptive Text */}
                        <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm md:text-base leading-relaxed`}>
                            <p>
                                Hotel Grand Girdhar Premier is a 4-star luxury property located in the heart of Indore at 57-A Medanta Main Road, Vijay Nagar. Established with a vision to provide world-class hospitality, our hotel has been serving guests since its inception, combining traditional Indian warmth with modern amenities.
                            </p>
                            <p>
                                Strategically positioned just 10 minutes from the Indore railway station, our hotel offers unparalleled convenience and comfort. Experience premium hospitality with modern amenities including air-conditioned rooms, free WiFi, complimentary parking, 24-hour front desk, room service, and daily housekeeping.
                            </p>
                            <p>
                                Our prime location provides easy access to Khajrana Ganesh Mandir (15-minute walk), C21 Mall, Maharana Pratap Square, and other major attractions, making it the perfect base for both business and leisure travelers. We take pride in our commitment to excellence and ensuring every guest experiences the true essence of Indore's hospitality.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 pt-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="text-[#D4AF37] flex-shrink-0 mt-0.5">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans font-semibold text-sm md:text-base mb-1`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-xs md:text-sm leading-relaxed`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <a 
                                href="https://maps.app.goo.gl/C7FNAC6xEY8sp5Jd7" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-[#D4AF37] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-lg font-sans font-semibold text-sm md:text-base hover:bg-[#C19B2A] transition-colors shadow-md"
                            >
                                Discover Our Location
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="relative">
                        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="/about.jpeg"
                                alt="Hotel Grand Girdhar Premier exterior"
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Rating Overlay */}
                            <div className={`absolute bottom-6 left-6 ${isDark ? 'bg-[#0F0F0E]/95' : 'bg-white/95'} backdrop-blur-sm rounded-lg px-5 py-4 shadow-xl border border-[#D4AF37]/30`}>
                                <div className={isDark ? 'text-white' : 'text-gray-900'}>
                                    <div className="text-4xl md:text-5xl font-bold mb-1 leading-none text-[#D4AF37]">4★</div>
                                    <div className={`text-xs md:text-sm font-sans mt-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Premium Hotel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

