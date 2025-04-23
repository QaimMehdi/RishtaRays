import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-pink-500' : 'text-pink-500'
              }`}
            >
              RishtaRays
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-secondary-dark hover:text-primary transition">
              Home
            </Link>
            <Link 
              href="/profiles" 
              className={`text-secondary-dark hover:text-primary transition ${
                router.pathname === '/profiles' 
                  ? 'font-bold' 
                  : ''
              }`}
            >
              Browse Profiles
            </Link>
            <Link 
              href="/contact" 
              className="text-secondary-dark hover:text-primary transition"
            >
              Contact
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center text-secondary-dark hover:text-primary transition"
            >
              <FaGlobe className="mr-2" />
              {language === 'en' ? 'اردو' : 'English'}
            </button>
            <Link
              href="/auth/register"
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition"
            >
              Register/Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-dark hover:text-primary"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-secondary-dark hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/profiles"
              className="block px-3 py-2 text-secondary-dark hover:text-primary transition"
            >
              Browse Profiles
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-secondary-dark hover:text-primary transition"
            >
              Contact
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 text-secondary-dark hover:text-primary transition"
            >
              <FaGlobe className="mr-2" />
              {language === 'en' ? 'اردو' : 'English'}
            </button>
            <Link
              href="/auth/register"
              className="block px-3 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition text-center mt-4"
            >
              Register/Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 