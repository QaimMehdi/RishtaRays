import { useState } from 'react';
import Layout from '../../components/Layout';
import { FaArrowRight, FaArrowLeft, FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    
    // Step 2: Personal Details
    age: '',
    gender: '',
    location: '',
    profession: '',
    education: '',
    
    // Step 3: Preferences
    preferredAgeRange: { min: '', max: '' },
    preferredLocation: '',
    preferredEducation: '',
    preferredProfession: '',
    
    // Step 4: Family Background
    familyType: '',
    siblings: '',
    parentsStatus: '',
    familyValues: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent as keyof typeof formData],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark'
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-neutral-dark">
              <span>Basic Info</span>
              <span>Personal Details</span>
              <span>Preferences</span>
              <span>Family</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary-dark mb-6">Basic Information</h2>
                
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-neutral-dark" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-2 border border-neutral rounded-lg"
                    required
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-neutral-dark" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-2 border border-neutral rounded-lg"
                    required
                  />
                </div>

                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-neutral-dark" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-2 border border-neutral rounded-lg"
                    required
                  />
                </div>

                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-neutral-dark" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-2 border border-neutral rounded-lg"
                    required
                  />
                </div>

                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-neutral-dark" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    className="w-full pl-10 pr-4 py-2 border border-neutral rounded-lg"
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary-dark mb-6">Personal Details</h2>
                
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Age"
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Current Location"
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                />

                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  placeholder="Profession"
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                />

                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  placeholder="Education"
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary-dark mb-6">Preferences</h2>
                
                <div className="flex space-x-4">
                  <input
                    type="number"
                    name="preferredAgeRange.min"
                    value={formData.preferredAgeRange.min}
                    onChange={handleInputChange}
                    placeholder="Min Age"
                    className="w-full px-4 py-2 border border-neutral rounded-lg"
                    required
                  />
                  <input
                    type="number"
                    name="preferredAgeRange.max"
                    value={formData.preferredAgeRange.max}
                    onChange={handleInputChange}
                    placeholder="Max Age"
                    className="w-full px-4 py-2 border border-neutral rounded-lg"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleInputChange}
                  placeholder="Preferred Location"
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                />

                <input
                  type="text"
                  name="preferredEducation"
                  value={formData.preferredEducation}
                  onChange={handleInputChange}
                  placeholder="Preferred Education Level"
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                />

                <input
                  type="text"
                  name="preferredProfession"
                  value={formData.preferredProfession}
                  onChange={handleInputChange}
                  placeholder="Preferred Profession"
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                />
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary-dark mb-6">Family Background</h2>
                
                <select
                  name="familyType"
                  value={formData.familyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                >
                  <option value="">Select Family Type</option>
                  <option value="joint">Joint Family</option>
                  <option value="nuclear">Nuclear Family</option>
                </select>

                <input
                  type="number"
                  name="siblings"
                  value={formData.siblings}
                  onChange={handleInputChange}
                  placeholder="Number of Siblings"
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                />

                <select
                  name="parentsStatus"
                  value={formData.parentsStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  required
                >
                  <option value="">Parents Status</option>
                  <option value="living">Living</option>
                  <option value="deceased">Deceased</option>
                </select>

                <textarea
                  name="familyValues"
                  value={formData.familyValues}
                  onChange={handleInputChange}
                  placeholder="Family Values and Traditions"
                  className="w-full px-4 py-2 border border-neutral rounded-lg"
                  rows={4}
                  required
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary-light transition"
                >
                  <FaArrowLeft className="mr-2" />
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto flex items-center px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
                >
                  Next
                  <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto flex items-center px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition"
                >
                  Complete Registration
                  <FaArrowRight className="ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register; 