import { useState } from 'react';
import Layout from '../../components/Layout';
import { FaHeart, FaFilter, FaInfoCircle } from 'react-icons/fa';
import Image from 'next/image';

const Matches = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    compatibility: 80,
    location: '',
    ageRange: { min: 20, max: 40 },
  });

  const matches = [
    {
      id: 1,
      name: 'Ayesha Khan',
      age: 28,
      location: 'Lahore',
      profession: 'Doctor',
      image: '/placeholder-profile.jpg',
      compatibility: 95,
      matchReasons: [
        'Similar educational background',
        'Shared interests in travel and reading',
        'Compatible family values',
      ],
    },
    {
      id: 2,
      name: 'Ali Ahmed',
      age: 30,
      location: 'Karachi',
      profession: 'Engineer',
      image: '/placeholder-profile.jpg',
      compatibility: 88,
      matchReasons: [
        'Complementary personalities',
        'Similar career goals',
        'Matching lifestyle preferences',
      ],
    },
    // Add more matches as needed
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-dark mb-4">Your AI Matches</h1>
          <p className="text-neutral-dark">
            These matches are carefully selected based on your profile and preferences.
            Our AI algorithm considers multiple factors to find your perfect match.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-primary hover:text-primary-dark transition"
          >
            <FaFilter className="mr-2" />
            Filter Matches
          </button>

          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-2">
                    Minimum Compatibility
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.compatibility}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        compatibility: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                  <span className="text-sm text-neutral-dark">{filters.compatibility}%</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                    className="w-full px-2 py-1 border border-neutral rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-2">
                    Age Range
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={filters.ageRange.min}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          ageRange: {
                            ...filters.ageRange,
                            min: parseInt(e.target.value),
                          },
                        })
                      }
                      className="w-20 px-2 py-1 border border-neutral rounded"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      value={filters.ageRange.max}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          ageRange: {
                            ...filters.ageRange,
                            max: parseInt(e.target.value),
                          },
                        })
                      }
                      className="w-20 px-2 py-1 border border-neutral rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-64">
                <Image
                  src={match.image}
                  alt={match.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full">
                  {match.compatibility}% Match
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-dark">
                      {match.name}, {match.age}
                    </h3>
                    <p className="text-neutral-dark">{match.location}</p>
                    <p className="text-neutral-dark">{match.profession}</p>
                  </div>
                  <button className="text-primary hover:text-primary-dark transition">
                    <FaHeart className="text-2xl" />
                  </button>
                </div>

                {/* Match Reasons */}
                <div className="mt-4">
                  <h4 className="font-medium text-secondary-dark mb-2">Why We Matched You</h4>
                  <ul className="space-y-2">
                    {match.matchReasons.map((reason, index) => (
                      <li key={index} className="flex items-start">
                        <FaInfoCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-neutral-dark">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-primary text-white py-2 rounded-full hover:bg-primary-dark transition">
                    View Profile
                  </button>
                  <button className="flex-1 border-2 border-primary text-primary py-2 rounded-full hover:bg-primary-light transition">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Explanation */}
        <div className="mt-8 bg-neutral-light p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-secondary-dark mb-4">
            How Our AI Matching Works
          </h3>
          <p className="text-neutral-dark mb-4">
            Our advanced AI algorithm considers multiple factors to find your perfect match:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-dark">
            <li>Personality traits and compatibility</li>
            <li>Educational and professional background</li>
            <li>Family values and cultural preferences</li>
            <li>Lifestyle choices and interests</li>
            <li>Location and future plans</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Matches; 