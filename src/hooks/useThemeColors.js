import { useTheme } from '../contexts/ThemeContext'

export const useThemeColors = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return {
        isDark,
        bg: {
            primary: isDark ? 'bg-[#0F0F0E]' : 'bg-[#FAF9F6]',
            secondary: isDark ? 'bg-[#1A1A19]' : 'bg-white',
            tertiary: isDark ? 'bg-[#2A2A29]' : 'bg-gray-50',
        },
        text: {
            primary: isDark ? 'text-white' : 'text-gray-900',
            secondary: isDark ? 'text-gray-300' : 'text-gray-700',
            tertiary: isDark ? 'text-gray-400' : 'text-gray-600',
        },
        border: {
            primary: isDark ? 'border-[#8B6F47]' : 'border-gray-200',
            secondary: isDark ? 'border-[#8B6F47]/30' : 'border-gray-300',
        },
        accent: {
            gold: 'text-[#D4AF37]',
            goldBg: 'bg-[#D4AF37]',
            goldHover: 'hover:bg-[#C19B2A]',
            brown: isDark ? 'bg-[#8B6F47]' : 'bg-[#8B6F47]',
            brownHover: isDark ? 'hover:bg-[#7A5F3A]' : 'hover:bg-[#7A5F3A]',
        }
    }
}

