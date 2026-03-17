import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { ShoppingCart } from 'lucide-react'

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()
  const { getCartCount } = useCart()

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              Event Hub
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-indigo-600 font-medium">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>

            <Link to="/cart" className="relative group">
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium">Dashboard</Link>
                <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
                  <span className="text-gray-700 font-medium">{user?.name}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
                <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">Login</Link>
                <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar