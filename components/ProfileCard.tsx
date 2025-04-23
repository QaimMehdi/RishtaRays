import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

interface Profile {
  id: number;
  name: string;
  age: number;
  gender: string;
  religion: string;
  city: string;
  education: string;
  occupation: string;
  imageUrl: string;
}

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden h-full">
      <div className="relative h-72 w-full">
        <Image
          src={profile.imageUrl}
          alt={profile.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-2xl font-semibold mb-1">{profile.name}, {profile.age}</h3>
          <div className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-pink-400" />
            <span>{profile.city}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
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
        
        <Link href={`/profile/${profile.id}`} className="block">
          <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl hover:from-pink-600 hover:to-pink-700 transition duration-300 font-medium">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
} 