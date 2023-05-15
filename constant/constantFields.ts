const faqFieldsObject = [
  {
    qus: 'How does Scope Seeker verify job openings?',
    ans: 'We verify job openings by directly sourcing them from reputable company career pages.',
  },
  {
    qus: 'How does personalized job recommendation work?',
    ans: 'Our algorithm analyzes your profile to recommend relevant job listings based on your skills and preferences.',
  },
  {
    qus: 'Can I set up customized job alerts?',
    ans: 'Yes, you can set personalized job alerts based on your preferred criteria and receive email notifications for new listings.',
  },
  {
    qus: 'Is Scope Seeker available on mobile devices?',
    ans: 'Yes, Scope Seeker is designed for optimal use on both mobile and desktop devices.',
  },
  {
    qus: 'How does Scope Seeker protect user information?',
    ans: 'We prioritize user privacy and employ strong data encryption measures to secure personal information. Our platform adheres to strict data protection regulations.',
  },
];

const popularCategoryObject = [
  {
    fieldName: 'Frontend Developer',
    opening: 2,
    iconName: 'frontend',
  },
  {
    fieldName: 'Backend Developer',
    opening: 3,
    iconName: 'backend',
  },
  {
    fieldName: 'Full-Stack Developer',
    opening: 4,
    iconName: 'fullstack',
  },
  {
    fieldName: 'Devops Developer',
    opening: 3,
    iconName: 'backend',
  },
  {
    fieldName: 'Software Developer',
    opening: 5,
    iconName: 'software',
  },
  {
    fieldName: 'Java Full Stack Developer',
    opening: 2,
    iconName: 'java',
  },
  {
    fieldName: 'Full-Stack Developer',
    opening: 9,
    iconName: 'fullstack',
  },
  {
    fieldName: 'Web Developer',
    opening: 1,
    iconName: 'web',
  },
];

const jobsFilter = [
  {
    category: 'Job Type',
    options: [
      { label: 'Full Time', value: 'FullTime' },
      { label: 'Part Time', value: 'PartTime' },
      { label: 'Internship', value: 'Internship' },
    ],
  },
  {
    category: 'Company Type',
    options: [
      { label: 'Information Technology', value: 'IT' },
      { label: 'Foreign MNCs', value: 'ForeignMNCs' },
      { label: 'StartUp', value: 'StartUp' },
      { label: 'Corporate', value: 'Corporate' },
      { label: 'FinTech', value: 'FinTech' },
      { label: 'Indian MNC', value: 'IndianMNC' },
      { label: 'Unicorn', value: 'Unicorn' },
    ],
  },
  {
    category: 'Experience',
    options: [
      { label: 'Fresher', value: 'Fresher' },
      { label: 'Intermediate', value: 'Intermediate' },
      { label: 'Expert', value: 'Expert' },
    ],
  },
  {
    category: 'Roles',
    options: [
      { label: 'Information Technology', value: 'IT' },
      { label: 'Front-End Developer', value: 'frontend developer' },
      { label: 'Backend-Developer', value: 'Backend developer' },
      { label: 'Software engineers', value: 'SDE' },
      { label: 'Java Developer', value: 'Java developer' },
      { label: 'Data Scientist', value: 'Data Scienctist' },
      { label: 'Web Developer', value: 'Web Developer' },
      { label: 'Mobile App Developer', value: 'Mobile App Developer' },
    ],
  },
  {
    category: 'Location',
    options: [
      { label: 'Bangalore', value: 'Bangalore' },
      { label: 'Pune', value: 'Pune' },
      { label: 'Ahmedabad', value: 'Ahmedabad' },
      { label: 'Noida', value: 'Noida' },
      { label: 'Kolkata', value: 'Kolkata' },
      { label: 'Hydrabad', value: 'Hydrabad' },
      { label: 'Mumbai', value: 'Mumbai' },
      { label: 'Chennai', value: 'Chennai' },
      { label: 'Gurgaon', value: 'Gurgaon' },
    ],
  },
  {
    category: 'Date Posted',
    options: [
      { label: 'Any Time', value: 'Any Time' },
      { label: 'Past Week', value: 'Past Week' },
      { label: 'Past 24 hours', value: 'Past 24 hours' },
      { label: 'Past Month', value: 'Past Month' },
    ],
  },
  {
    category: 'Technology',
    options: [
      { label: 'JavaScript', value: 'JavaScript' },
      { label: 'Java', value: 'Java' },
      { label: 'React', value: 'React' },
      { label: 'Nextjs', value: 'Nextjs' },
      { label: 'Nodejs', value: 'Nodejs' },
      { label: 'React Native', value: 'React Native' },
      { label: 'UI/UX', value: 'UI/UX' },
      { label: 'AWS', value: 'AWS' },
      { label: 'Expressjs', value: 'Expressjs' },
      { label: 'Python', value: 'Python' },
      { label: 'C++', value: 'C++' },
    ],
  },
  {
    category: 'Job Categories',
    options: [
      { label: 'Web Developer', value: 'Web Developer' },
      { label: 'UI/UX Designer', value: 'UI/UX Designer' },
      {
        label: 'Full-Stack Web Developer',
        value: 'Full-Stack Web Developer',
      },
      { label: 'Back-End Developer', value: 'Back-end Developer' },
    ],
  },
];
const companyFilter = [
  {
    category: 'Company Type',
    options: [
      { label: 'Information Technology', value: 'IT' },
      { label: 'Foreign MNCs', value: 'ForeignMNCs' },
      { label: 'StartUp', value: 'StartUp' },
      { label: 'Corporate', value: 'Corporate' },
      { label: 'FinTech', value: 'FinTech' },
      { label: 'Indian MNC', value: 'IndianMNC' },
      { label: 'Unicorn', value: 'Unicorn' },
    ],
  },
  {
    category: 'Location',
    options: [
      { label: 'Bangalore', value: 'Bangalore' },
      { label: 'Pune', value: 'Pune' },
      { label: 'Ahmedabad', value: 'Ahmedabad' },
      { label: 'Noida', value: 'Noida' },
      { label: 'Kolkata', value: 'Kolkata' },
      { label: 'Hydrabad', value: 'Hydrabad' },
      { label: 'Mumbai', value: 'Mumbai' },
      { label: 'Chennai', value: 'Chennai' },
      { label: 'Gurgaon', value: 'Gurgaon' },
    ],
  },
  {
    category: 'Date Posted',
    options: [
      { label: 'Any Time', value: 'Any Time' },
      { label: 'Past Week', value: 'Past Week' },
      { label: 'Past 24 hours', value: 'Past 24 hours' },
      { label: 'Past Month', value: 'Past Month' },
    ],
  },
  {
    category: 'Technology',
    options: [
      { label: 'JavaScript', value: 'JavaScript' },
      { label: 'Java', value: 'Java' },
      { label: 'React', value: 'React' },
      { label: 'Nextjs', value: 'Nextjs' },
      { label: 'Nodejs', value: 'Nodejs' },
      { label: 'React Native', value: 'React Native' },
      { label: 'UI/UX', value: 'UI/UX' },
      { label: 'AWS', value: 'AWS' },
      { label: 'Expressjs', value: 'Expressjs' },
      { label: 'Python', value: 'Python' },
      { label: 'C++', value: 'C++' },
    ],
  },
  {
    category: 'Job Categories',
    options: [
      { label: 'Web Developer', value: 'Web Developer' },
      { label: 'UI/UX Designer', value: 'UI/UX Designer' },
      {
        label: 'Full-Stack Web Developer',
        value: 'Full-Stack Web Developer',
      },
      { label: 'Back-End Developer', value: 'Back-end Developer' },
    ],
  },
];

export { faqFieldsObject, popularCategoryObject, jobsFilter, companyFilter };