import { useTheme } from '../contexts/ThemeContext'

const Testimonials = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const testimonials = [
    {
      quote: "Excellent stay at Hotel Grand Girdhar Premier! The location is perfect - just 10 minutes from the railway station. The rooms are clean, spacious, and well-maintained. The staff is very courteous and helpful. The breakfast spread is good with vegetarian options. Highly recommended for both business and leisure travelers.",
      reviewer: "Rajesh Kumar",
      rating: 5
    },
    {
      quote: "Had a wonderful experience during my business trip to Indore. The hotel is strategically located in Vijay Nagar with easy access to major business areas. The WiFi is fast, rooms are comfortable, and the service is prompt. The proximity to Khajrana Ganesh Mandir was an added bonus. Will definitely stay here again.",
      reviewer: "Priya Sharma",
      rating: 5
    },
    {
      quote: "Great value for money! The hotel offers all modern amenities at reasonable rates. The air-conditioned rooms are clean with comfortable beds. Free parking is a big plus. The staff went out of their way to make our stay comfortable. The location near C21 Mall is convenient for shopping. Overall, a pleasant stay experience.",
      reviewer: "Amit Patel",
      rating: 4
    },
    {
      quote: "Stayed here for 3 nights with family. The hotel exceeded our expectations. The rooms are well-appointed with all necessary facilities. The separate toilet and shower facilities are a thoughtful touch. The breakfast is served fresh daily. The staff is professional and always ready to help. Perfect location for exploring Indore.",
      reviewer: "Meera Desai",
      rating: 5
    },
    {
      quote: "Clean, comfortable, and convenient! The hotel is located in a prime area of Vijay Nagar. The rooms have good amenities including flat-screen TV, mini-bar, and work desk. The free WiFi works well throughout the property. The hotel is close to restaurants and shopping areas. Good hospitality and reasonable pricing.",
      reviewer: "Vikram Singh",
      rating: 4
    },
    {
      quote: "Excellent service and great location. The hotel staff is very accommodating and helpful. The rooms are spacious with modern facilities. The vegetarian breakfast is delicious. The hotel's proximity to the railway station and major attractions makes it ideal for tourists. Highly satisfied with my stay.",
      reviewer: "Anjali Verma",
      rating: 5
    },
    {
      quote: "Comfortable stay with all basic amenities. The hotel maintains good hygiene standards. The air conditioning works perfectly. The staff is polite and responsive. The location is excellent - walking distance to Khajrana Ganesh Mandir and close to shopping malls. Good option for budget-conscious travelers seeking quality accommodation.",
      reviewer: "Suresh Reddy",
      rating: 4
    },
    {
      quote: "Perfect hotel for a family stay in Indore. The rooms are clean and well-maintained. The hotel offers tea and coffee making facilities in rooms which is very convenient. The staff is friendly and always available to assist. The location is safe and well-connected. Would recommend to anyone visiting Indore.",
      reviewer: "Kavita Nair",
      rating: 5
    }
  ]

  const StarIcon = () => (
    <svg className="w-5 h-5" fill="#FFD700" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )

  const GoogleIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )

  return (
    <section id="testimonials" className={`w-full ${isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]'} py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          {/* Small uppercase heading */}
          <div className="text-[#D4AF37] text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-sans uppercase tracking-wider font-medium mb-2 xs:mb-2.5 sm:mb-3">
            TESTIMONIALS
          </div>
          
          {/* Main Title */}
          <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} font-serif text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-3 xs:mb-3.5 sm:mb-4 px-2`}>
            What Our Guests Say
          </h2>
          
          {/* Thin horizontal line */}
          <div className="w-12 xs:w-14 sm:w-16 h-0.5 bg-[#D4AF37] mx-auto mb-3 xs:mb-3.5 sm:mb-4"></div>
          
          {/* Subtitle */}
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg px-3 xs:px-4`}>
            Real experiences from our valued guests on Google Reviews
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col ${isDark ? 'bg-[#1A1A19]' : 'bg-white'} border ${isDark ? 'border-[#8B6F47]/30' : 'border-gray-200'}`}
            >
              {/* Star Rating */}
              <div className="flex gap-0.5 xs:gap-1 mb-3 xs:mb-3.5 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" fill="#FFD700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed mb-4 xs:mb-5 sm:mb-6 flex-grow`}>
                "{testimonial.quote}"
              </p>

              {/* Reviewer Info */}
              <div className="mt-auto">
                <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans font-medium text-xs xs:text-sm sm:text-sm md:text-base lg:text-base mb-1.5 xs:mb-2`}>
                  {testimonial.reviewer}
                </div>
                <div className="flex items-center gap-1.5 xs:gap-2">
                  <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-[10px] xs:text-xs sm:text-xs md:text-sm`}>
                    Verified Google Review
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button
            className="px-8 md:px-12 py-3 md:py-4 rounded-lg text-[#0F0F0E] font-sans font-medium text-sm md:text-base hover:bg-[#C19B2A] transition-colors bg-[#D4AF37]"
          >
            Read All Reviews on Google
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

