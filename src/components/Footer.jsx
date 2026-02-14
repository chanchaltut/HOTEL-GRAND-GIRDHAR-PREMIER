import { useTheme } from '../contexts/ThemeContext'
import girdharLogo from '../assets/girdharLogo.png'

const Footer = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    
    return (
        <footer className={`w-full ${isDark ? 'bg-[#0F0F0E]' : 'bg-gray-50'} ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-7 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-12 2xl:gap-14 mb-8 xs:mb-9 sm:mb-10 md:mb-11 lg:mb-12">
                    {/* Logo and Description */}
                    <div className="space-y-3 xs:space-y-3.5 sm:space-y-4">
                        <div className="mb-3 xs:mb-3.5 sm:mb-4">
                            <img 
                                className="w-24 h-auto xs:w-28 xs:h-auto sm:w-32 sm:h-auto md:w-36 md:h-auto lg:w-40 lg:h-auto" 
                                src={girdharLogo} 
                                alt="Hotel Grand Girdhar Premier Logo" 
                            />
                        </div>
                        <p className="text-[#D4AF37] font-serif text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-normal mb-2 xs:mb-2.5 sm:mb-3">
                            HOTEL GRAND GIRDHAR PREMIER
                        </p>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed`}>
                            Experience premium hospitality in the heart of Indore. Your gateway to luxury, comfort, and unforgettable stays.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#D4AF37] font-serif text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-normal mb-3 xs:mb-3.5 sm:mb-4 md:mb-5 lg:mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3">
                            <li>
                                <a 
                                    href="#about" 
                                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg hover:text-[#D4AF37] transition-colors`}
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#rooms" 
                                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg hover:text-[#D4AF37] transition-colors`}
                                >
                                    Rooms & Suites
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#gallery" 
                                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg hover:text-[#D4AF37] transition-colors`}
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#testimonials" 
                                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg hover:text-[#D4AF37] transition-colors`}
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg hover:text-[#D4AF37] transition-colors`}
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-[#D4AF37] font-serif text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-normal mb-3 xs:mb-3.5 sm:mb-4 md:mb-5 lg:mb-6">
                            Contact Us
                        </h3>
                        <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3">
                            <li className="flex items-start gap-2 xs:gap-2.5 sm:gap-3">
                                <svg 
                                    className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                                    />
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                                    />
                                </svg>
                                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm md:text-base leading-relaxed`}>
                                    57-A Medanta Main Road,<br />
                                    Vijay Nagar, Indore
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg 
                                    className="w-5 h-5 text-[#D4AF37] flex-shrink-0" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                                    />
                                </svg>
                                <a 
                                    href="tel:+917312345678" 
                                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg hover:text-[#D4AF37] transition-colors`}
                                >
                                    +91 731 234 5678
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg 
                                    className="w-5 h-5 text-[#D4AF37] flex-shrink-0" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                    />
                                </svg>
                                <a 
                                    href="mailto:info@grandgirdharpremier.com" 
                                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg hover:text-[#D4AF37] transition-colors`}
                                >
                                    info@grandgirdharpremier.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="text-[#D4AF37] font-serif text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-normal mb-3 xs:mb-3.5 sm:mb-4 md:mb-5 lg:mb-6">
                            Follow Us
                        </h3>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mb-3 xs:mb-3.5 sm:mb-4 leading-relaxed`}>
                            Stay connected with us on social media for updates and special offers.
                        </p>
                        <div className="flex items-center gap-3 xs:gap-3.5 sm:gap-4">
                            <a 
                                href="#" 
                                className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#8B6F47] flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                                aria-label="Facebook"
                            >
                                <svg 
                                    className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full bg-[#8B6F47] flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                                aria-label="Instagram"
                            >
                                <svg 
                                    className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a 
                                href="#" 
                                className="w-10 h-10 rounded-full bg-[#8B6F47] flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                                aria-label="Twitter"
                            >
                                <svg 
                                    className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-300'} my-6 xs:my-7 sm:my-8 md:my-9 lg:my-10`}></div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 xs:gap-3.5 sm:gap-4">
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg text-center sm:text-left`}>
                        © {new Date().getFullYear()} Hotel Grand Girdhar Premier. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 xs:gap-5 sm:gap-6">
                        <a 
                            href="#" 
                            className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg hover:text-[#D4AF37] transition-colors`}
                        >
                            Privacy Policy
                        </a>
                        <a 
                            href="#" 
                            className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg hover:text-[#D4AF37] transition-colors`}
                        >
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

