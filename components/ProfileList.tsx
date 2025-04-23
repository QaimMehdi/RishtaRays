import ProfileCard, { Profile } from './ProfileCard';

export const sampleProfiles: Profile[] = [
  {
    id: 1,
    name: 'Ayesha Khan',
    age: 28,
    city: 'Lahore',
    profession: 'Medical Doctor',
    religion: 'Islam',
    sect: 'Sunni',
    tagline: 'Dedicated to healing hearts, both professionally and personally',
    imageUrl: '/images/ayesha.jpg'
  },
  {
    id: 2,
    name: 'Ali Ahmed',
    age: 30,
    city: 'Karachi',
    profession: 'Software Engineer',
    religion: 'Islam',
    sect: 'Sunni',
    tagline: 'Building bridges between technology and tradition',
    imageUrl: '/images/ali.jpg'
  },
  {
    id: 3,
    name: 'Fatima Zahra',
    age: 26,
    city: 'Islamabad',
    profession: 'Architect',
    religion: 'Islam',
    sect: 'Shia',
    tagline: 'Designing spaces that bring families together',
    imageUrl: '/images/fatima.jpg'
  },
  {
    id: 4,
    name: 'Hassan Malik',
    age: 32,
    city: 'Rawalpindi',
    profession: 'Business Analyst',
    religion: 'Islam',
    sect: 'Sunni',
    tagline: 'Analytical mind with a romantic heart',
    imageUrl: '/images/hassan.jpg'
  },
  {
    id: 5,
    name: 'Zainab Qureshi',
    age: 27,
    city: 'Faisalabad',
    profession: 'Teacher',
    religion: 'Islam',
    sect: 'Sunni',
    tagline: 'Nurturing minds and spreading knowledge with passion',
    imageUrl: '/images/zainab.jpg'
  },
  {
    id: 6,
    name: 'Omar Farooq',
    age: 31,
    city: 'Multan',
    profession: 'Civil Engineer',
    religion: 'Islam',
    sect: 'Sunni',
    tagline: 'Building foundations for a strong future together',
    imageUrl: '/images/omar.jpg'
  }
];

const ProfileList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {sampleProfiles.map((profile) => (
          <div key={profile.id} className="h-full">
            <ProfileCard profile={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList; 