import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900">
                AM
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="text-center pt-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-8">Oops! This page seems to have wandered off...</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors duration-200"
        >
          Return Home
        </Link>
      </main>
    </div>
  )
} 