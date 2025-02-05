import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import sunsetImg from './assets/sunset.jpeg'
import fireImg from './assets/fire.jpeg'
import caveImg from './assets/cave.jpeg'
import logImg from './assets/log.jpeg'
import carImg from './assets/car.jpeg'
import leafImg from './assets/leaf.jpeg'
import projectHailMaryImg from './assets/project-hail-mary.jpg'
import wayOfKingsImg from './assets/way-of-kings.jpg'
import computerArchitectureImg from './assets/computer-architecture.jpg'
import leviathanWakesImg from './assets/leviathan-wakes.jpg'
import eyeOfTheWorldImg from './assets/eye-of-the-world.jpg'
import redRisingImg from './assets/red-rising.jpg'
import tauZeroImg from './assets/tau-zero.jpg'


// Book data
const books = [
  {
    id: 1,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: projectHailMaryImg,
    category: "Science Fiction",
    description: "A lone astronaut must save humanity from extinction in this thrilling interstellar adventure.",
    wantToRead: false,
    rating: 4.5
  },
  {
    id: 2,
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    cover: wayOfKingsImg,
    category: "Fantasy",
    description: "First book in the epic Stormlight Archive series, following multiple characters in a richly detailed fantasy world.",
    wantToRead: false,
    rating: 5
  },
  {
    id: 3,
    title: "Modern Computer Architecture and Organization",
    author: "Jim Ledin",
    cover: computerArchitectureImg,
    category: "Technical",
    description: "A comprehensive guide to understanding modern computer system architecture and organization.",
    wantToRead: false,
    rating: 4
  },
  {
    id: 4,
    title: "Leviathan Wakes",
    author: "James S. A. Corey",
    cover: leviathanWakesImg,
    category: "Science Fiction",
    description: "Humanity has colonized the solar system, but when Jim Holden stumbles upon a derelict ship, he finds himself in the middle of a conspiracy that threatens the entire system.",
    wantToRead: false,
    rating: 3.5
  },
  {
    id: 5,
    title: "The Eye of the World",
    author: "Robert Jordan",
    cover: eyeOfTheWorldImg,
    category: "Fantasy",
    description: "The first book of The Wheel of Time series. When their village is attacked by terrifying creatures, three young men begin a perilous journey that will change their lives forever.",
    wantToRead: false,
    rating: 3
  },
  {
    id: 6,
    title: "Red Rising",
    author: "Pierce Brown",
    cover: redRisingImg,
    category: "Science Fiction",
    description: "A tale of rebellion in a color-coded society on Mars, where a young Red infiltrates the ruling Gold class to bring about revolution.",
    wantToRead: true,
    rating: null
  },
  {
    id: 7,
    title: "Tau Zero",
    author: "Poul Anderson",
    cover: tauZeroImg,
    category: "Science Fiction",
    description: "A groundbreaking hard science fiction novel about a colonization ship that suffers an accident and continues to accelerate closer and closer to the speed of light.",
    wantToRead: true,
    rating: null
  }
]

// Add photos data near the top with other data
const photos = [
  {
    id: 1,
    url: sunsetImg,
    caption: "Sunset view"
  },
  {
    id: 2,
    url: fireImg,
    caption: "Campfire moments"
  },
  {
    id: 3,
    url: caveImg,
    caption: "Cave exploration"
  },
  {
    id: 4,
    url: logImg,
    caption: "Forest adventures"
  },
  {
    id: 5,
    url: carImg,
    caption: "Road trips"
  },
  {
    id: 6,
    url: leafImg,
    caption: "Nature details"
  }
]

// Star Rating Component
function StarRating({ rating }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <svg key={index} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )
        } else if (hasHalfStar && index === fullStars) {
          return (
            <svg key={index} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
              <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )
        } else {
          return (
            <svg key={index} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )
        }
      })}
      <span className="text-xs text-gray-300 ml-1">{rating?.toFixed(1) || 'N/A'}</span>
    </div>
  )
}

// Book Card Component
function BookCard({ book }) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div 
      className="relative flex-shrink-0 w-[280px] h-[500px] flex items-center justify-center transition-transform duration-300 hover:scale-105 p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.2)_0px_10px_20px_-5px]">
        {/* Book Cover */}
        {imageError ? (
          <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-gray-800 font-bold text-lg mb-2">{book.title}</h3>
            <p className="text-gray-600 text-sm">by {book.author}</p>
          </div>
        ) : (
          <>
            <img 
              src={book.cover} 
              alt={book.title}
              className="w-full h-auto max-h-[500px] object-contain rounded-lg"
              onError={() => setImageError(true)}
            />
            
            {/* Want to Read Banner */}
            {book.wantToRead && (
              <div className="absolute top-[25px] left-[-35px] bg-gray-100/50 text-gray-700 px-3 py-[2px] text-xs font-medium tracking-wide transform -rotate-45 shadow-md w-[160px] flex items-center justify-center backdrop-blur-sm">
                <span className="-ml-2">Want to Read</span>
              </div>
            )}
            
            {/* Overlay with Description */}
            <div 
              className={`absolute inset-0 bg-black/80 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg
                ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <h3 className="text-white font-bold text-lg mb-1">{book.title}</h3>
              <p className="text-gray-300 text-sm mb-2">by {book.author}</p>
              <span className="text-xs font-medium text-gray-400 mb-2">{book.category}</span>
              <StarRating rating={book.rating} />
              <p className="text-gray-200 text-sm mt-2">{book.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// Navigation Component
function Navbar({ lenis }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleClick = (e, id) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const target = document.querySelector(id)
    if (target) {
      lenis.scrollTo(target, { offset: 0 })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <a 
              href="#about" 
              onClick={(e) => handleClick(e, '#about')}
              className="text-xl font-bold text-gray-900"
            >
              AM
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden sm:flex sm:items-center">
            <a href="#about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
            <a href="#personal" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Personal</a>
            <a href="#reading" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Reading Journey</a>
            <a href="#contact" className="ml-3 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              type="button" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`sm:hidden absolute top-16 left-0 right-0 transform transition-all duration-300 ease-in-out border-t border-gray-100 ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-2 pb-3 space-y-1">
              <a 
                href="#about" 
                onClick={(e) => handleClick(e, '#about')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                About
              </a>
              <a 
                href="#personal" 
                onClick={(e) => handleClick(e, '#personal')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Personal
              </a>
              <a 
                href="#reading" 
                onClick={(e) => handleClick(e, '#reading')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Reading Journey
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleClick(e, '#contact')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Section Components
function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </div>
    </section>
  )
}

function Hero() {
  return (
    <Section id="about" className="flex items-center h-[50vh]">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Asher Morse</h1>
        <p className="text-lg text-gray-700">Student at Gauntlet AI, exploring full-stack development.</p>
      </div>
    </Section>
  )
}

function ReadingList() {
  const [shuffledBooks, setShuffledBooks] = useState([])

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
      const newArray = [...array]
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      }
      return newArray
    }

    setShuffledBooks(shuffleArray(books))
  }, [])

  return (
    <Section id="reading">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Reading Journey</h2>
      
      <div className="relative">
        {/* Scroll Indicators */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-full pointer-events-none bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-full pointer-events-none bg-gradient-to-r from-gray-50 to-transparent z-10" />
        
        {/* Books Container */}
        <div 
          id="books-container"
          className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {shuffledBooks.map(book => (
            <div key={book.id} className="flex-shrink-0">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Personal() {
  const [shuffledPhotos, setShuffledPhotos] = useState([])

  useEffect(() => {
    const shuffleArray = (array) => {
      const newArray = [...array]
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      }
      return newArray
    }

    setShuffledPhotos(shuffleArray(photos))
  }, [])

  return (
    <Section id="personal" className="bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Personal</h2>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            When I'm not diving into technology and coding, you can find me hiking trails, exploring new places, climbing (whether in the gym or up trees), getting lost in a good book, or spending time with friends.
          </p>
          <p className="text-lg text-gray-700">
            I'm passionate about understanding how things work, from computer systems to the latest web technologies. Reading is a big part of my life - I enjoy science fiction, fantasy, and technical books that challenge my understanding of the world.
          </p>
        </div>

        <div className="relative -mx-4 sm:mx-0">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-full pointer-events-none bg-gradient-to-l from-gray-50 to-transparent z-10" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-full pointer-events-none bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 sm:px-0">
            {shuffledPhotos.map(photo => (
              <div key={photo.id} className="flex-shrink-0 relative">
                <img 
                  src={photo.url} 
                  alt=""
                  className="h-[250px] w-auto object-contain rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" className="bg-gray-100">
      <div className="flex justify-center gap-8">
        <a 
          href="mailto:contact@ashermorse.org" 
          className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-200 rounded-lg hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
          aria-label="Email"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
        <a 
          href="https://github.com/ashermorse" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-200 rounded-lg hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/ashermorse/" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 text-gray-600 hover:text-gray-900 transition-all duration-200 rounded-lg hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
        </a>
      </div>
    </Section>
  )
}

// Main App
function App() {
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    setLenis(lenisInstance)

    function raf(time) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href?.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          lenisInstance.scrollTo(target, { offset: 0 })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      lenisInstance.destroy()
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <div className="bg-gray-50">
      <Navbar lenis={lenis} />
      <main className="pt-16">
        <Hero />
        <Personal />
        <ReadingList />
        <Contact />
      </main>
    </div>
  )
}

export default App 