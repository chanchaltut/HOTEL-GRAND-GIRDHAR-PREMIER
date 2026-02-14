import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const CheckAvailability = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    const [selectedDate, setSelectedDate] = useState(null)
    const [currentMonth, setCurrentMonth] = useState(new Date(2026, 1)) // February 2026

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
    const getDaysInMonth = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDayOfWeek = firstDay.getDay()
        
        const days = []
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null)
        }
        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day)
        }
        return days
    }

    const days = getDaysInMonth(currentMonth)

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const navigateMonth = (direction) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction))
    }

    const isToday = (day) => {
        const today = new Date()
        return (
            day === today.getDate() &&
            currentMonth.getMonth() === today.getMonth() &&
            currentMonth.getFullYear() === today.getFullYear()
        )
    }

    return (
        <section className={`w-full ${isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]'} py-16 md:py-20 lg:py-24`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* REAL-TIME AVAILABILITY Badge */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#8B6F47]/30 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                        <span className="text-xs md:text-sm font-sans text-[#D4AF37] font-medium">
                            REAL-TIME AVAILABILITY
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-4">
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                        Check Availability
                    </h2>
                    <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
                </div>

                {/* Description */}
                <p className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-base md:text-lg max-w-2xl mx-auto mb-12`}>
                    Select your preferred dates to see real-time availability across all our luxury accommodations.
                </p>

                {/* Main Booking Widget */}
                <div className={`${isDark ? 'bg-[#1A1A19]' : 'bg-white'} border-2 ${isDark ? 'border-[#8B6F47]' : 'border-gray-300'} rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto`}>
                    {/* Dark Header */}
                    <div className="bg-[#8B6F47] px-6 md:px-8 py-4 md:py-5">
                        <div className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5 md:w-6 md:h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <div>
                                <h3 className="text-white font-sans text-lg md:text-xl font-semibold">
                                    Select Your Dates
                                </h3>
                                <p className="text-white/80 font-sans text-sm">
                                    Choose your perfect luxury stay dates
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className={`p-6 md:p-8 lg:p-10 ${isDark ? 'bg-[#1A1A19]' : 'bg-white'}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left: Calendar */}
                            <div>
                                {/* Calendar */}
                                <div className="mb-6">
                                    {/* Month Navigation */}
                                    <div className="flex items-center justify-between mb-6">
                                        <button
                                            onClick={() => navigateMonth(-1)}
                                            className="text-[#D4AF37] hover:opacity-70 transition-opacity"
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
                                                    d="M15 19l-7-7 7-7"
                                                />
                                            </svg>
                                        </button>
                                        <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans text-lg md:text-xl font-semibold`}>
                                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                        </h4>
                                        <button
                                            onClick={() => navigateMonth(1)}
                                            className="text-[#D4AF37] hover:opacity-70 transition-opacity"
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
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Days of Week */}
                                    <div className="grid grid-cols-7 gap-2 mb-3">
                                        {daysOfWeek.map((day) => (
                                            <div
                                                key={day}
                                                className={`text-center text-xs md:text-sm font-sans ${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium`}
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="grid grid-cols-7 gap-2">
                                        {days.map((day, index) => {
                                            if (day === null) {
                                                return <div key={`empty-${index}`} className="h-10 md:h-12"></div>
                                            }
                                            const isSelected = selectedDate === day
                                            const today = isToday(day)
                                            
                                            return (
                                                <button
                                                    key={day}
                                                    onClick={() => setSelectedDate(day)}
                                                    className={`
                                                        h-10 md:h-12 rounded-lg font-sans text-sm md:text-base
                                                        transition-all
                                                        ${isSelected
                                                            ? 'bg-[#D4AF37] text-[#0F0F0E] font-semibold'
                                                            : today
                                                            ? 'bg-[#8B6F47] text-white font-semibold'
                                                            : isDark
                                                            ? 'bg-[#2A2A29] text-gray-300 hover:bg-[#3A3A39]'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                        }
                                                    `}
                                                >
                                                    {day}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-sans">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Selected</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#4A4A49]' : 'bg-gray-300'}`}></div>
                                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Unavailable</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#8B6F47]"></div>
                                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Range</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#8B6F47]"></div>
                                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Today</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Booking Benefits */}
                            <div className="flex flex-col">
                                {/* Gold Checkmark Button */}
                                <div className="flex justify-end mb-6">
                                    <button className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center hover:bg-[#C19B2A] transition-colors">
                                        <svg
                                            className="w-6 h-6 text-[#0F0F0E]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Booking Benefits Heading */}
                                <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans text-xl md:text-2xl font-semibold mb-2`}>
                                    Booking Benefits
                                </h3>
                                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-sm md:text-base mb-6`}>
                                    Exclusive advantages when you book direct
                                </p>

                                {/* Benefit Cards */}
                                <div className="space-y-4 mb-8">
                                    {/* Instant Confirmation */}
                                    <div className={`${isDark ? 'bg-[#2A2A29]' : 'bg-gray-50'} border ${isDark ? 'border-[#8B6F47]/30' : 'border-gray-200'} rounded-xl p-4 flex items-start gap-3`}>
                                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-[#D4AF37]"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13 1.07V9h7c0 4.08-3.06 7.44-7 7.93v2.02c4.94-.5 9-4.08 9-9.05h-7V1.07zM3.5 13c.83 0 1.5.67 1.5 1.5 0 1.11-.89 2-2 2-.55 0-1-.45-1-1 0-.83.67-1.5 1.5-1.5zM11 13.95V22c-4-1.09-7-4.85-7-9.05h7v-.05c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3c.35 0 .69-.06 1-.17z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans font-semibold text-sm md:text-base mb-1`}>
                                                Instant Confirmation
                                            </h4>
                                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-xs md:text-sm`}>
                                                Get immediate booking confirmation
                                            </p>
                                        </div>
                                    </div>

                                    {/* Best Rate Guarantee */}
                                    <div className="bg-[#8B6F47] rounded-xl p-4 flex items-start gap-3">
                                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white/20 rounded">
                                            <svg
                                                className="w-5 h-5 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-sans font-semibold text-sm md:text-base mb-1">
                                                Best Rate Guarantee
                                            </h4>
                                            <p className="text-white/80 font-sans text-xs md:text-sm">
                                                Lowest rates and exclusive perks
                                            </p>
                                        </div>
                                    </div>

                                    {/* Flexible Cancellation */}
                                    <div className={`${isDark ? 'bg-[#2A2A29]' : 'bg-gray-50'} border border-[#D4AF37]/30 rounded-xl p-4 flex items-start gap-3`}>
                                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-[#D4AF37]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-sans font-semibold text-sm md:text-base mb-1`}>
                                                Flexible Cancellation
                                            </h4>
                                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-sans text-xs md:text-sm`}>
                                                Free cancellation up to 7 days
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Buttons */}
                                <div className="flex flex-col gap-3 mt-auto">
                                    <button className="bg-[#D4AF37] text-[#0F0F0E] font-sans font-semibold px-6 py-3 rounded-xl hover:bg-[#C19B2A] transition-colors text-sm md:text-base">
                                        View All Rooms & Suites
                                    </button>
                                    <button className="bg-[#8B6F47] text-white font-sans font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#7A5F3A] transition-colors text-sm md:text-base">
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
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            />
                                        </svg>
                                        <span>Chat with Us</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckAvailability

