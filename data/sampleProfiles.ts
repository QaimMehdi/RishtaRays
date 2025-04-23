export interface Profile {
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

export const sampleProfiles: Profile[] = [
  {
    id: 1,
    name: "Ayesha Khan",
    age: 28,
    gender: "Female",
    religion: "Islam",
    city: "Lahore",
    education: "Masters in Business Administration",
    occupation: "Marketing Manager",
    imageUrl: "/images/ayesha.jpg"
  },
  {
    id: 2,
    name: "Ali Ahmed",
    age: 30,
    gender: "Male",
    religion: "Islam",
    city: "Karachi",
    education: "PhD in Computer Science",
    occupation: "Software Engineer",
    imageUrl: "/images/ali.jpg"
  },
  {
    id: 3,
    name: "Fatima Zahra",
    age: 26,
    gender: "Female",
    religion: "Islam",
    city: "Islamabad",
    education: "Bachelor in Architecture",
    occupation: "Architect",
    imageUrl: "/images/fatima.jpg"
  },
  {
    id: 4,
    name: "Hassan Malik",
    age: 32,
    gender: "Male",
    religion: "Islam",
    city: "Rawalpindi",
    education: "Masters in Finance",
    occupation: "Investment Banker",
    imageUrl: "/images/hassan.jpg"
  },
  {
    id: 5,
    name: "Zainab Qureshi",
    age: 27,
    gender: "Female",
    religion: "Islam",
    city: "Faisalabad",
    education: "Masters in Psychology",
    occupation: "Clinical Psychologist",
    imageUrl: "/images/zainab.jpg"
  },
  {
    id: 6,
    name: "Omar Farooq",
    age: 31,
    gender: "Male",
    religion: "Islam",
    city: "Multan",
    education: "MBBS",
    occupation: "Doctor",
    imageUrl: "/images/omar.jpg"
  }
]; 