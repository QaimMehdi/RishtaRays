import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHeart, FaStar, FaQuoteLeft, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import { sampleProfiles } from '../data/sampleProfiles';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    lookingFor: 'Female',
    ageFrom: '20',
    ageTo: '35',
    religion: 'Islam',
    location: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to search results page with query parameters
    router.push({
      pathname: '/search',
      query: searchParams,
    });
  };

  const religions = [
    'Islam',
    'Christianity',
    'Hinduism',
    'Sikhism',
    'Other'
  ];

  const locations = [
    'Karachi',
    'Lahore',
    'Islamabad',
    'Rawalpindi',
    'Peshawar',
    'Multan',
    'Faisalabad',
    'Overseas'
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sara & Ahmed',
      location: 'Lahore',
      text: 'RishtaRays helped us find each other with respect to our families values. The process was smooth and comfortable.',
      image: '/images/happy-couple.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Zainab & Hassan',
      location: 'Karachi',
      text: 'We are grateful to RishtaRays for bringing us together. Their focus on cultural values made our families very comfortable.',
      image: '/images/happy-couple.jpg',
      rating: 5,
    },
  ];

  // Get first 3 profiles for featured section
  const featuredProfiles = sampleProfiles.slice(0, 3);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                Find Your Match,
                <span className="block text-pink-500">Respectfully</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Join thousands of successful couples who found their life partners through
                RishtaRays. Our culturally-sensitive approach ensures your journey to
                finding the perfect match is comfortable and respectful.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full">
                <Image
                  src="/images/happy-couple.jpg"
                  alt="Happy couple"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Search Filter Section */}
          <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border border-pink-100">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Looking For */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">I'm looking for</label>
                    <div className="relative">
                      <select
                        value={searchParams.lookingFor}
                        onChange={(e) => setSearchParams({...searchParams, lookingFor: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <option value="Female">Woman</option>
                        <option value="Male">Man</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Age Range */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <select
                          value={searchParams.ageFrom}
                          onChange={(e) => setSearchParams({...searchParams, ageFrom: e.target.value})}
                          className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 appearance-none cursor-pointer hover:bg-gray-100 transition-colors text-sm"
                        >
                          {Array.from({ length: 43 }, (_, i) => i + 18).map(age => (
                            <option key={age} value={age}>{age}</option>
                          ))}
                        </select>
                      </div>
                      <span className="flex items-center text-gray-500">to</span>
                      <div className="flex-1">
                        <select
                          value={searchParams.ageTo}
                          onChange={(e) => setSearchParams({...searchParams, ageTo: e.target.value})}
                          className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 appearance-none cursor-pointer hover:bg-gray-100 transition-colors text-sm"
                        >
                          {Array.from({ length: 43 }, (_, i) => i + 18).map(age => (
                            <option key={age} value={age}>{age}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Religion */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Religion</label>
                    <div className="relative">
                      <select
                        value={searchParams.religion}
                        onChange={(e) => setSearchParams({...searchParams, religion: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <option value="">Any</option>
                        {religions.map(religion => (
                          <option key={religion} value={religion}>{religion}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="relative">
                      <select
                        value={searchParams.location}
                        onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 appearance-none cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <option value="">Anywhere</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto sm:mx-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl hover:from-pink-600 hover:to-pink-700 transition duration-300 flex items-center justify-center gap-2 mt-4"
                >
                  <FaSearch />
                  <span>Let's Begin</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Featured Profiles Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Featured Profiles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sampleProfiles.slice(0, 3).map((profile) => (
                <div key={profile.id} className="h-full">
                  <ProfileCard profile={profile} />
                </div>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-12">
              <Link href="/profiles" className="inline-block bg-pink-500 text-white px-6 sm:px-8 py-3 rounded-xl hover:bg-pink-600 transition duration-300">
                View All Profiles
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
                >
                  <div className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                  </div>
                  <div>
                    <div className="text-pink-500 mb-2">
                      <FaQuoteLeft size={20} />
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">{testimonial.text}</p>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-base sm:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Join RishtaRays today and start your journey towards finding your life partner
              in a respectful and culturally-sensitive environment.
            </p>
            <Link
              href="/auth/register"
              className="bg-white text-pink-500 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
            >
              Sign Up Now
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
} 