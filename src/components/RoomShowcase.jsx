import { useTheme } from '../contexts/ThemeContext'

const RoomShowcase = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const roomTypes = [
    {
      name: 'Deluxe King-Size Room',
      price: '₹3,500',
      size: '280 sq ft',
      image: '/bed.jpeg',
      features: [
        '1 King-Size Bed (6x6.5 ft)',
        'City View Window',
        '32-inch Flat-Screen TV',
        'Split Air Conditioning',
        'Mini-Bar with Refrigerator',
        'Free High-Speed WiFi',
        'Ergonomic Work Desk',
        'Private Bathroom with Separate Toilet & Shower',
        'Tea & Coffee Making Facilities',
        '24-Hour Room Service'
      ],
      description: 'Spacious and elegantly designed rooms with modern amenities, perfect for couples and solo travelers seeking comfort and luxury.'
    },
    {
      name: 'Deluxe Twin Room',
      price: '₹3,200',
      size: '300 sq ft',
      image: '/bed.jpeg',
      features: [
        '2 Single Beds (3x6.5 ft each)',
        'City View Window',
        '32-inch Flat-Screen TV',
        'Split Air Conditioning',
        'Mini-Bar with Refrigerator',
        'Free High-Speed WiFi',
        'Ergonomic Work Desk',
        'Private Bathroom with Separate Toilet & Shower',
        'Tea & Coffee Making Facilities',
        '24-Hour Room Service'
      ],
      description: 'Perfect for families or friends traveling together, featuring two comfortable single beds with ample space for luggage and movement.'
    },
    {
      name: 'Executive Suite',
      price: '₹5,500',
      size: '450 sq ft',
      image: '/bed.jpeg',
      features: [
        'King-Size Bed (6x6.5 ft)',
        'Separate Living Area with Sofa',
        '42-inch Flat-Screen TV',
        'Split Air Conditioning',
        'Premium Mini-Bar',
        'Free High-Speed WiFi',
        'Dedicated Work Space',
        'Premium Bathroom with Bathtub',
        'Tea & Coffee Making Facilities',
        '24-Hour Room Service',
        'Complimentary Breakfast'
      ],
      description: 'Luxurious suite with separate living area, ideal for business travelers and extended stays. Features premium amenities and extra space for relaxation.'
    },
    {
      name: 'Family Room',
      price: '₹4,500',
      size: '350 sq ft',
      image: '/bed.jpeg',
      features: [
        '1 King-Size Bed + 1 Extra Bed',
        'City View Window',
        '32-inch Flat-Screen TV',
        'Split Air Conditioning',
        'Mini-Bar with Refrigerator',
        'Free High-Speed WiFi',
        'Work Desk',
        'Private Bathroom with Separate Toilet & Shower',
        'Tea & Coffee Making Facilities',
        '24-Hour Room Service'
      ],
      description: 'Spacious family-friendly accommodation with extra bed option, perfect for families with children. Includes all modern amenities for a comfortable stay.'
    }
  ]

  return (
    <section id="rooms" className={`w-full ${isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]'} py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          <div className="text-[#D4AF37] text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-sans uppercase tracking-wider font-medium mb-2 xs:mb-2.5 sm:mb-3">
            OUR ACCOMMODATIONS
          </div>
          <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} font-serif text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-2 xs:mb-2.5 sm:mb-3 pb-1.5 xs:pb-2 border-b border-[#D4AF37] inline-block px-2`}>
            Rooms & Suites
          </h2>
          <p className="text-[#D4AF37] font-sans text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-xl mt-3 xs:mt-3.5 sm:mt-4 max-w-2xl mx-auto px-3 xs:px-4">
            Experience comfort and luxury in our well-appointed rooms
          </p>
        </div>

        {/* Descriptive Text */}
        <div className="text-center mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg max-w-3xl mx-auto leading-relaxed px-3 xs:px-4`}>
            Our air-conditioned rooms feature private bathrooms, tea and coffee making facilities, flat-screen TVs, and free WiFi. Each room includes separate toilet and shower facilities, ensuring maximum comfort. A vegetarian breakfast is served daily at Hotel Grand Girdhar Premier.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 mb-8 xs:mb-9 sm:mb-10 md:mb-12">
          {roomTypes.map((room, index) => (
            <div
              key={index}
              className={`${isDark ? 'bg-[#1A1A19]' : 'bg-white'} border ${isDark ? 'border-[#8B6F47]/30' : 'border-gray-200'} rounded-xl overflow-hidden shadow-lg hover:border-[#D4AF37]/50 transition-all ${index === 3 ? 'lg:col-start-2' : ''}`}
            >
              {/* Room Image */}
              <div className="relative w-full h-[250px] xs:h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] xl:h-[380px] 2xl:h-[400px] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Price Badge */}
                <div className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 bg-[#D4AF37] text-[#0F0F0E] px-2.5 xs:px-3 sm:px-3.5 md:px-4 py-1.5 xs:py-2 sm:py-2 rounded-lg font-sans font-semibold text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-base">
                  {room.price}/DAY
                </div>
              </div>

              {/* Room Details */}
              <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8">
                <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-serif text-xl xs:text-1.5xl sm:text-2xl md:text-2.5xl lg:text-3xl xl:text-3.5xl font-normal mb-1.5 xs:mb-2`}>
                  {room.name}
                </h3>
                <p className="text-[#D4AF37] font-sans text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base mb-2 xs:mb-2.5 sm:mb-3">
                  {room.size}
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mb-4 xs:mb-5 sm:mb-6 leading-relaxed`}>
                  {room.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 xs:space-y-2 mb-4 xs:mb-5 sm:mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-[10px] xs:text-xs sm:text-xs md:text-sm`}>
                      <span className="mr-2 xs:mr-2.5 sm:mr-3 text-[#D4AF37] flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-[#D4AF37] text-[#0F0F0E] px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg font-sans font-semibold text-xs xs:text-sm sm:text-sm md:text-base hover:bg-[#C19B2A] transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-[#8B6F47] text-white px-6 xs:px-7 sm:px-8 md:px-10 lg:px-12 py-2.5 xs:py-3 sm:py-3.5 md:py-4 rounded-lg font-sans font-semibold text-xs xs:text-sm sm:text-sm md:text-base lg:text-base hover:bg-[#7A5F3A] transition-colors shadow-md">
            View All Rooms
          </button>
        </div>
      </div>
    </section>
  )
}

export default RoomShowcase

