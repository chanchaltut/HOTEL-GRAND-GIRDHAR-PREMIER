import { useTheme } from '../contexts/ThemeContext'

const Contact = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    
    return (
        <section id="contact" className={`w-full ${isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]'} py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="text-[#D4AF37] text-xs md:text-sm font-sans uppercase tracking-wider font-medium mb-3">
                        GET IN TOUCH
                    </div>
                    <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-3 pb-2 border-b border-[#D4AF37] inline-block`}>
                        Contact Us
                    </h2>
                    <p className="text-[#D4AF37] font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto">
                        We're here to assist you with your booking and inquiries
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    {/* Left: Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-serif text-2xl md:text-3xl font-normal mb-6`}>
                                Contact Information
                            </h3>
                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm md:text-base leading-relaxed mb-8`}>
                                Reach out to us through any of the following channels. Our team is available 24/7 to assist you with reservations, inquiries, or any special requests.
                            </p>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[#8B6F47] flex items-center justify-center flex-shrink-0">
                                <svg 
                                    className="w-6 h-6 text-white" 
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
                            </div>
                            <div>
                                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans font-semibold text-base md:text-lg mb-2`}>
                                    Address
                                </h4>
                                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm md:text-base leading-relaxed`}>
                                    57-A Medanta Main Road,<br />
                                    Vijay Nagar, Indore - 452010<br />
                                    Madhya Pradesh, India
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[#8B6F47] flex items-center justify-center flex-shrink-0">
                                <svg 
                                    className="w-6 h-6 text-white" 
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
                            </div>
                            <div>
                                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans font-semibold text-base md:text-lg mb-2`}>
                                    Phone
                                </h4>
                                <a 
                                    href="tel:+917312345678" 
                                    className="text-[#D4AF37] font-sans text-sm md:text-base hover:text-[#C19B2A] transition-colors block"
                                >
                                    +91 731 234 5678
                                </a>
                                <a 
                                    href="tel:+919876543210" 
                                    className="text-[#D4AF37] font-sans text-sm md:text-base hover:text-[#C19B2A] transition-colors block mt-1"
                                >
                                    +91 987 654 3210
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[#8B6F47] flex items-center justify-center flex-shrink-0">
                                <svg 
                                    className="w-6 h-6 text-white" 
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
                            </div>
                            <div>
                                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans font-semibold text-base md:text-lg mb-2`}>
                                    Email
                                </h4>
                                <a 
                                    href="mailto:info@grandgirdharpremier.com" 
                                    className="text-[#D4AF37] font-sans text-sm md:text-base hover:text-[#C19B2A] transition-colors block"
                                >
                                    info@grandgirdharpremier.com
                                </a>
                                <a 
                                    href="mailto:reservations@grandgirdharpremier.com" 
                                    className="text-[#D4AF37] font-sans text-sm md:text-base hover:text-[#C19B2A] transition-colors block mt-1"
                                >
                                    reservations@grandgirdharpremier.com
                                </a>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[#8B6F47] flex items-center justify-center flex-shrink-0">
                                <svg 
                                    className="w-6 h-6 text-white" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans font-semibold text-base md:text-lg mb-2`}>
                                    Reception Hours
                                </h4>
                                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm md:text-base leading-relaxed`}>
                                    24 Hours / 7 Days a Week<br />
                                    Front Desk: Always Available
                                </p>
                            </div>
                        </div>

                        {/* Map Link */}
                        <div className="pt-4">
                            <a 
                                href="https://maps.app.goo.gl/C7FNAC6xEY8sp5Jd7" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0F0F0E] px-6 py-3 rounded-lg font-sans font-semibold text-sm md:text-base hover:bg-[#C19B2A] transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                View on Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className={`${isDark ? 'bg-[#1A1A19]' : 'bg-white'} border ${isDark ? 'border-[#8B6F47]/30' : 'border-gray-200'} rounded-xl p-6 md:p-8`}>
                        <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-serif text-2xl md:text-3xl font-normal mb-6`}>
                            Send Us a Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm font-medium mb-2`}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={`w-full ${isDark ? 'bg-[#2A2A29] text-white' : 'bg-gray-50 text-gray-900'} border ${isDark ? 'border-[#8B6F47]/30' : 'border-gray-300'} rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#D4AF37] transition-colors`}
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm font-medium mb-2`}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`w-full ${isDark ? 'bg-[#2A2A29] text-white' : 'bg-gray-50 text-gray-900'} border ${isDark ? 'border-[#8B6F47]/30' : 'border-gray-300'} rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#D4AF37] transition-colors`}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm font-medium mb-2`}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className={`w-full ${isDark ? 'bg-[#2A2A29] text-white' : 'bg-gray-50 text-gray-900'} border ${isDark ? 'border-[#8B6F47]/30' : 'border-gray-300'} rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#D4AF37] transition-colors`}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm font-medium mb-2`}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className={`w-full ${isDark ? 'bg-[#2A2A29] text-white' : 'bg-gray-50 text-gray-900'} border ${isDark ? 'border-[#8B6F47]/30' : 'border-gray-300'} rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#D4AF37] transition-colors`}
                                    placeholder="What is this regarding?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm font-medium mb-2`}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className={`w-full ${isDark ? 'bg-[#2A2A29] text-white' : 'bg-gray-50 text-gray-900'} border ${isDark ? 'border-[#8B6F47]/30' : 'border-gray-300'} rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none`}
                                    placeholder="Tell us how we can help you..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#D4AF37] text-[#0F0F0E] px-6 py-3 rounded-lg font-sans font-semibold text-sm md:text-base hover:bg-[#C19B2A] transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

