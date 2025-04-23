import ProfileList from '../components/ProfileList';
import Layout from '../components/Layout';

export default function ProfilesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Featured Profiles
          </h1>
          <ProfileList />
        </div>
      </div>
    </Layout>
  );
} 