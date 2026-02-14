const NatureSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Section - Text Content */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {/* Main Heading */}
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-green-500 uppercase tracking-tight font-normal">
                Rooted in Nature.
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-gray-900 uppercase leading-[0.95] font-normal">
                Designed for<br />
                Stillness.
              </h2>
            </div>

            {/* First Paragraph */}
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
              Lunara is a modern escape for those who crave stillness, space, and something real. Tucked deep in forested hills, our off-grid suites are designed to disappear into nature – and invite you to do the same.
            </p>

            {/* Feature List with Decorative Brackets */}
            <div className="relative py-6 md:py-8 lg:py-10 my-4 md:my-6">
              {/* Top Decorative Bracket - Inverted L */}
              <div className="absolute top-0 left-0">
                <div className="w-6 h-6 md:w-8 md:h-8 border-l-[3px] border-t-[3px] border-gray-900"></div>
                <div className="absolute top-0 left-6 md:left-8 w-8 md:w-12 h-[3px] bg-gray-900"></div>
              </div>
              
              {/* Feature Items */}
              <div className="pl-10 md:pl-14 lg:pl-16 pr-4 space-y-2 md:space-y-3 lg:space-y-4">
                <p className="text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl font-sans font-medium">
                  [Built with intention]
                </p>
                <p className="text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl font-sans font-medium">
                  [Powered by sustainability]
                </p>
                <p className="text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl font-sans font-medium">
                  [Guided by simplicity]
                </p>
              </div>

              {/* Bottom Decorative Bracket - Inverted L */}
              <div className="absolute bottom-0 left-0">
                <div className="w-6 h-6 md:w-8 md:h-8 border-l-[3px] border-b-[3px] border-gray-900"></div>
                <div className="absolute bottom-0 left-6 md:left-8 w-8 md:w-12 h-[3px] bg-gray-900"></div>
              </div>
            </div>

            {/* Second Paragraph */}
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
              Here, luxury means quiet mornings, clean air, elemental design, and time that moves slower. Whether you're here to reset, reconnect, or simply breathe, Lunara offers a place to pause – beautifully.
            </p>
          </div>

          {/* Right Section - Images */}
          <div className="space-y-6 md:space-y-8">
            {/* Top Image - Picnic Scene */}
            <div className="relative w-full rounded-lg overflow-hidden">
              <div className="aspect-[4/3] md:aspect-[3/2]">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Outdoor picnic scene with family"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Image - Pool Scene */}
            <div className="relative w-full rounded-lg overflow-hidden">
              <div className="aspect-[4/3] md:aspect-[3/2]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Infinity pool with lounge chairs and modern building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Button - Bottom Right */}
        <div className="flex justify-end mt-10 md:mt-12 lg:mt-16 xl:mt-20">
          <div className="flex items-center gap-2 md:gap-3">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm md:text-base lg:text-lg font-sans font-medium shadow-md hover:shadow-lg">
              Learn More
            </button>
            <button className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NatureSection

