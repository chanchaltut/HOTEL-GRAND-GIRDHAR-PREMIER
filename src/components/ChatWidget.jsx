import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! Welcome to Hotel Grand Girdhar Premier. How can I assist you today?",
            sender: 'hotel',
            time: '10:00 AM'
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const { theme } = useTheme()

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!inputMessage.trim()) return

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'user',
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
        }

        setMessages([...messages, userMessage])
        setInputMessage('')

        // Simulate hotel response
        setTimeout(() => {
            const responses = [
                "Thank you for your message! Our team will get back to you shortly.",
                "We'd be happy to help you with your booking. Would you like to check room availability?",
                "For immediate assistance, please call us at +91 731 234 5678 or email us at info@grandgirdharpremier.com",
                "We offer special packages for extended stays. Would you like to know more?",
                "Our check-in time is 2:00 PM and check-out is 11:00 AM. How can we assist you further?"
            ]
            const randomResponse = responses[Math.floor(Math.random() * responses.length)]
            
            const hotelResponse = {
                id: messages.length + 2,
                text: randomResponse,
                sender: 'hotel',
                time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
            }
            setMessages(prev => [...prev, hotelResponse])
        }, 1000)
    }

    const isDark = theme === 'dark'
    const bgColor = isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]'
    const textColor = isDark ? 'text-white' : 'text-gray-900'
    const secondaryBg = isDark ? 'bg-[#1A1A19]' : 'bg-white'
    const borderColor = isDark ? 'border-[#8B6F47]' : 'border-gray-200'
    const inputBg = isDark ? 'bg-[#2A2A29]' : 'bg-gray-50'
    const userMessageBg = isDark ? 'bg-[#8B6F47]' : 'bg-[#D4AF37]'
    const hotelMessageBg = isDark ? 'bg-[#1A1A19]' : 'bg-gray-100'

    return (
        <div className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50">
            {/* Chat Button */}
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${isDark ? 'bg-[#D4AF37] hover:bg-[#C19B2A]' : 'bg-[#8B6F47] hover:bg-[#7A5F3A]'} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110`}
                aria-label="Chat"
            >
                <svg
                    className="w-7 h-7 md:w-8 md:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                </svg>
            </button>

            {/* Chat Window - Opens on Hover */}
            {isOpen && (
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className={`absolute bottom-20 right-0 w-80 md:w-96 h-[500px] ${bgColor} ${borderColor} border-2 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-5`}
                >
                    {/* Chat Header */}
                    <div className={`${isDark ? 'bg-[#8B6F47]' : 'bg-[#D4AF37]'} px-6 py-4 flex items-center justify-between`}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-sans font-semibold text-base">Hotel Support</h3>
                                <p className="text-white/80 font-sans text-xs">We're online</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:opacity-80 transition-opacity"
                            aria-label="Close chat"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[75%] rounded-lg px-4 py-2 ${message.sender === 'user' ? userMessageBg + ' text-white' : hotelMessageBg + ' ' + textColor}`}>
                                    <p className="font-sans text-sm leading-relaxed">{message.text}</p>
                                    <span className={`text-xs mt-1 block ${message.sender === 'user' ? 'text-white/70' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {message.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Actions */}
                    <div className={`px-4 py-2 border-t ${borderColor}`}>
                        <div className="flex gap-2 flex-wrap">
                            <button className={`px-3 py-1.5 rounded-full ${isDark ? 'bg-[#1A1A19] text-gray-300' : 'bg-gray-100 text-gray-700'} font-sans text-xs hover:opacity-80 transition-opacity`}>
                                Book Room
                            </button>
                            <button className={`px-3 py-1.5 rounded-full ${isDark ? 'bg-[#1A1A19] text-gray-300' : 'bg-gray-100 text-gray-700'} font-sans text-xs hover:opacity-80 transition-opacity`}>
                                Check Rates
                            </button>
                            <button className={`px-3 py-1.5 rounded-full ${isDark ? 'bg-[#1A1A19] text-gray-300' : 'bg-gray-100 text-gray-700'} font-sans text-xs hover:opacity-80 transition-opacity`}>
                                Call Us
                            </button>
                        </div>
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className={`${secondaryBg} border-t ${borderColor} p-4`}>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your message..."
                                className={`flex-1 ${inputBg} ${textColor} border ${borderColor} rounded-lg px-4 py-2 font-sans text-sm focus:outline-none focus:border-[#D4AF37] transition-colors`}
                            />
                            <button
                                type="submit"
                                className={`${isDark ? 'bg-[#D4AF37] hover:bg-[#C19B2A]' : 'bg-[#8B6F47] hover:bg-[#7A5F3A]'} text-white px-4 py-2 rounded-lg transition-colors`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default ChatWidget

