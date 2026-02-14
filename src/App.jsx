import { ThemeProvider } from './contexts/ThemeContext'
import Hero from './components/Hero'
import CheckAvailability from './components/CheckAvailability'
import About from './components/About'
import VisualJourney from './components/VisualJourney'
import RoomShowcase from './components/RoomShowcase'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <ThemeProvider>
            <div className="w-full overflow-x-hidden">
                <Hero />
                <CheckAvailability />
                <About />
                <VisualJourney />
                <RoomShowcase />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default App

