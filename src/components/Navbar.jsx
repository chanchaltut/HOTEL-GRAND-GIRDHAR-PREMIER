import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import girdharLogo from '../assets/girdharLogo.png'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="flex items-center justify-between px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 pt-4 xs:pt-5 sm:pt-6 md:pt-7 lg:pt-8 relative z-50">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img
            className="w-14 h-auto sm:w-16 sm:h-auto md:w-20 md:h-auto lg:w-24 lg:h-auto xl:w-28 xl:h-auto 2xl:w-32 2xl:h-auto"
            src={girdharLogo}
            alt="Logo"
          />
        </div>

        {/* Center: Navigation Links - Hidden below xl (1000px) */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-5 3xl:gap-8 flex-1 justify-center">
          <a
            href="#about"
            className={`${isDark ? 'text-white' : 'text-white'} text-sm 2xl:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
          >
            About Us
          </a>
          <a
            href="#rooms"
            className={`${isDark ? 'text-white' : 'text-white'} text-sm 2xl:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
          >
            Rooms
          </a>
          <a
            href="#gallery"
            className={`${isDark ? 'text-white' : 'text-white'} text-sm 2xl:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
          >
            Gallery
          </a>
          <a
            href="#testimonials"
            className={`${isDark ? 'text-white' : 'text-white'} text-sm 2xl:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className={`${isDark ? 'text-white' : 'text-white'} text-sm 2xl:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
          >
            Contact Us
          </a>
        </nav>

        {/* Right: Theme Toggle (always visible) + Hamburger Menu (below xl) / Desktop buttons (xl and above) */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          {/* Theme Toggle Button - Always visible, more aesthetic */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full ${isDark ? 'bg-[#8B6F47]/80 hover:bg-[#7A5F3A]' : 'bg-[#D4AF37]/80 hover:bg-[#C19B2A]'} backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Desktop: Sign In and Reserve Stay - Hidden below xl */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-5 3xl:gap-6">
            <a
              href="#"
              className={`${isDark ? 'text-white' : 'text-white'} text-sm 2xl:text-base font-sans flex items-center gap-2 hover:opacity-80 transition-opacity`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Sign In</span>
            </a>
            <button className="bg-[#D4AF37] text-white px-5 2xl:px-6 py-2.5 2xl:py-3 rounded-lg text-sm 2xl:text-base font-sans font-medium hover:bg-[#C19B2A] transition-colors whitespace-nowrap">
              Reserve Stay
            </button>
          </div>

          {/* Hamburger Menu Button - Visible below xl (1000px) */}
          <button
            onClick={toggleMenu}
            className={`xl:hidden ${isDark ? 'text-white' : 'text-white'} hover:opacity-80 transition-opacity relative w-8 h-8 flex items-center justify-center`}
            aria-label="Menu"
          >
            {/* Animated Hamburger Icon - Perfect Symmetric X */}
            <div className="relative w-6 h-6">
              {/* Top bar */}
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 origin-center ${isMenuOpen
                  ? 'rotate-45 top-1/2 -translate-y-1/2'
                  : 'top-1'
                  }`}
              ></span>
              {/* Middle bar */}
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300 -translate-y-1/2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              ></span>
              {/* Bottom bar */}
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 origin-center ${isMenuOpen
                  ? '-rotate-45 top-1/2 -translate-y-1/2'
                  : 'bottom-1'
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Blur Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sidebar - Slides from left */}
      <div
        className={`fixed top-0 left-0 h-full w-[70vw] ${isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]'} shadow-2xl z-50 xl:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full p-6 sm:p-8">
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 mb-8">
            <a
              href="#about"
              onClick={closeMenu}
              className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg sm:text-xl font-sans hover:text-[#D4AF37] transition-colors scroll-smooth py-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
            >
              About Us
            </a>
            <a
              href="#rooms"
              onClick={closeMenu}
              className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg sm:text-xl font-sans hover:text-[#D4AF37] transition-colors scroll-smooth py-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
            >
              Rooms
            </a>
            <a
              href="#gallery"
              onClick={closeMenu}
              className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg sm:text-xl font-sans hover:text-[#D4AF37] transition-colors scroll-smooth py-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg sm:text-xl font-sans hover:text-[#D4AF37] transition-colors scroll-smooth py-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg sm:text-xl font-sans hover:text-[#D4AF37] transition-colors scroll-smooth py-2 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
            >
              Contact Us
            </a>
          </nav>

          {/* Sign In and Reserve Stay Buttons */}
          <div className="mt-auto space-y-4">
            <a
              href="#"
              onClick={closeMenu}
              className={`flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'} text-lg sm:text-xl font-sans hover:text-[#D4AF37] transition-colors py-3`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Sign In</span>
            </a>
            <button
              onClick={closeMenu}
              className="w-full bg-[#D4AF37] text-[#0F0F0E] px-6 py-3.5 rounded-lg text-lg sm:text-xl font-sans font-semibold hover:bg-[#C19B2A] transition-colors"
            >
              Reserve Stay
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
