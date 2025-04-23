import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaHeart, FaArrowLeft } from 'react-icons/fa';
import Layout from '../../components/Layout';
import { sampleProfiles } from '../../data/sampleProfiles';
import Link from 'next/link';

export default function ProfileDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const profile = sampleProfiles.find(p => p.id === Number(id));

  if (!profile) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">Profile Not Found</h1>
              <Link href="/profiles" className="text-pink-500 hover:text-pink-600">
                <span className="flex items-center justify-center gap-2">
                  <FaArrowLeft /> Back to Profiles
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-96 w-full">
              <Image
                src={profile.imageUrl || '/placeholder-couple.jpg'}
                alt={profile.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h1 className="text-4xl font-bold mb-2">{profile.name}, {profile.age}</h1>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-pink-400" />
                  <span className="text-lg">{profile.city}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaGraduationCap className="text-pink-500 text-xl mt-1" />
                        <div>
                          <p className="text-sm text-gray-500">Education</p>
                          <p className="text-gray-800">{profile.education}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <FaBriefcase className="text-pink-500 text-xl mt-1" />
                        <div>
                          <p className="text-sm text-gray-500">Occupation</p>
                          <p className="text-gray-800">{profile.occupation}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Religious Background</h2>
                    <p className="text-gray-800">{profile.religion}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
                    <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-xl hover:from-pink-600 hover:to-pink-700 transition duration-300 font-medium flex items-center justify-center gap-2">
                      <FaHeart /> Express Interest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 