import { useTheme } from '../contexts/ThemeContext'
import girdharLogo from '../assets/girdharLogo.png'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <div className="flex items-center justify-between px-6 md:px-8 lg:px-12 pt-6 md:pt-8">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <img
          className="w-12 h-auto md:w-16 md:h-auto lg:w-20 lg:h-auto"
          src={girdharLogo}
          alt="Logo"
        />
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
        <a
          href="#about"
          className={`${isDark ? 'text-white' : 'text-white'} text-sm md:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
        >
          About Us
        </a>
        <a
          href="#rooms"
          className={`${isDark ? 'text-white' : 'text-white'} text-sm md:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
        >
          Rooms
        </a>
        <a
          href="#gallery"
          className={`${isDark ? 'text-white' : 'text-white'} text-sm md:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
        >
          Gallery
        </a>
        <a
          href="#testimonials"
          className={`${isDark ? 'text-white' : 'text-white'} text-sm md:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className={`${isDark ? 'text-white' : 'text-white'} text-sm md:text-base font-sans hover:text-[#D4AF37] transition-colors scroll-smooth`}
        >
          Contact Us
        </a>
      </nav>

      {/* Mobile Menu Button (hidden on desktop) */}
      <button
        className={`md:hidden ${isDark ? 'text-white' : 'text-white'} hover:opacity-80 transition-opacity`}
        aria-label="Menu"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Right: Theme Toggle, Sign In and Reserve Stay */}
      <div className="hidden md:flex items-center gap-4 md:gap-6 flex-shrink-0">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`w-10 h-10 rounded-lg ${isDark ? 'bg-[#8B6F47] hover:bg-[#7A5F3A]' : 'bg-[#D4AF37] hover:bg-[#C19B2A]'} flex items-center justify-center transition-colors`}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        <a
          href="#"
          className={`${isDark ? 'text-white' : 'text-white'} text-sm md:text-base font-sans flex items-center gap-2 hover:opacity-80 transition-opacity`}
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
        <button className="bg-[#D4AF37] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-sans font-medium hover:bg-[#C19B2A] transition-colors">
          Reserve Stay
        </button>
      </div>
    </div>
  )
}

export default Navbar
