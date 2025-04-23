import { useState } from 'react';
import Layout from '../../components/Layout';
import { FaFilter, FaSearch, FaHeart } from 'react-icons/fa';
import Image from 'next/image';

const Profiles = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    age: { min: 20, max: 40 },
    location: '',
    profession: '',
    education: '',
  });

  const profiles = [
    {
      id: 1,
      name: 'Ayesha Khan',
      age: 28,
      location: 'Lahore',
      profession: 'Doctor',
      education: 'MBBS',
      image: '/placeholder-profile.jpg',
      matchPercentage: 95,
    },
    {
      id: 2,
      name: 'Ali Ahmed',
      age: 30,
      location: 'Karachi',
      profession: 'Engineer',
      education: 'BSc Engineering',
      image: '/placeholder-profile.jpg',
      matchPercentage: 88,
    },
    // Add more profiles as needed
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search profiles..."
                className="w-full px-4 py-2 border border-neutral rounded-full pl-10"
              />
              <FaSearch className="absolute left-4 top-3 text-neutral-dark" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
            >
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-2">
                    Age Range
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={filters.age.min}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          age: { ...filters.age, min: parseInt(e.target.value) },
                        })
                      }
                      className="w-20 px-2 py-1 border border-neutral rounded"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      value={filters.age.max}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          age: { ...filters.age, max: parseInt(e.target.value) },
                        })
                      }
                      className="w-20 px-2 py-1 border border-neutral rounded"
                    />
                  </div>
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
                    Profession
                  </label>
                  <input
                    type="text"
                    value={filters.profession}
                    onChange={(e) =>
                      setFilters({ ...filters, profession: e.target.value })
                    }
                    className="w-full px-2 py-1 border border-neutral rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-dark mb-2">
                    Education
                  </label>
                  <input
                    type="text"
                    value={filters.education}
                    onChange={(e) =>
                      setFilters({ ...filters, education: e.target.value })
                    }
                    className="w-full px-2 py-1 border border-neutral rounded"
                  />
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

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-64">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full">
                  {profile.matchPercentage}% Match
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-dark">
                      {profile.name}, {profile.age}
                    </h3>
                    <p className="text-neutral-dark">{profile.location}</p>
                  </div>
                  <button className="text-primary hover:text-primary-dark transition">
                    <FaHeart className="text-2xl" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-neutral-dark">
                    <span className="font-medium">Profession:</span> {profile.profession}
                  </p>
                  <p className="text-neutral-dark">
                    <span className="font-medium">Education:</span> {profile.education}
                  </p>
                </div>
                <button className="w-full mt-4 bg-primary text-white py-2 rounded-full hover:bg-primary-dark transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-neutral rounded hover:bg-neutral-light transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
              1
            </button>
            <button className="px-4 py-2 border border-neutral rounded hover:bg-neutral-light transition">
              2
            </button>
            <button className="px-4 py-2 border border-neutral rounded hover:bg-neutral-light transition">
              3
            </button>
            <button className="px-4 py-2 border border-neutral rounded hover:bg-neutral-light transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profiles; 