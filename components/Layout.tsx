import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHeart, FaSearch, FaUser, FaEnvelope, FaGlobe } from 'react-icons/fa';
import Navbar from './Navbar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ur' : 'en';
    setLanguage(newLang);
    // Here you would implement your language switching logic
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout; 