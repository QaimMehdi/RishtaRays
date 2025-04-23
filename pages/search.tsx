import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProfileCard from '../components/ProfileCard';
import { sampleProfiles } from '../components/ProfileList';

export default function SearchResults() {
  const router = useRouter();
  const [filteredProfiles, setFilteredProfiles] = useState(sampleProfiles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const { lookingFor, ageFrom, ageTo, religion, location } = router.query;
    
    // Filter profiles based on search criteria
    const filtered = sampleProfiles.filter(profile => {
      const matchesGender = !lookingFor || profile.gender === lookingFor;
      const matchesAge = (!ageFrom || profile.age >= Number(ageFrom)) && 
                        (!ageTo || profile.age <= Number(ageTo));
      const matchesReligion = !religion || religion === '' || profile.religion === religion;
      const matchesLocation = !location || location === '' || profile.city === location;

      return matchesGender && matchesAge && matchesReligion && matchesLocation;
    });

    setFilteredProfiles(filtered);
    setLoading(false);
  }, [router.isReady, router.query]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Results</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span>{filteredProfiles.length} profiles found</span>
              {router.query.location && router.query.location !== '' && (
                <span>in {router.query.location}</span>
              )}
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
            </div>
          ) : filteredProfiles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProfiles.map((profile) => (
                <div key={profile.id} className="h-full">
                  <ProfileCard profile={profile} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">No matches found</h2>
              <p className="text-gray-600 mb-8">Try adjusting your search criteria to find more matches</p>
              <button
                onClick={() => router.push('/')}
                className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition duration-300"
              >
                Back to Search
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 