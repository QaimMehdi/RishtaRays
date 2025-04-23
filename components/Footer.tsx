import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">RishtaRays</h3>
            <p className="text-neutral-light mb-4">
              Finding your perfect match with cultural understanding and modern technology.
              We believe in making meaningful connections while respecting traditions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-primary transition"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/profiles" className="hover:text-primary transition">
                  Browse Profiles
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-primary transition">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-primary transition">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-light">
              © {new Date().getFullYear()} RishtaRays. All rights reserved.
            </p>
            <p className="text-sm text-neutral-light flex items-center mt-2 md:mt-0">
              Made with <FaHeart className="text-primary mx-1" /> in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 