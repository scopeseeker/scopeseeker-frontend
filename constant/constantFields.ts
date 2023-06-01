const companyCardFields = [
  {
    companyName: 'ABC Corp',
    companyLogo: '/assets/images/company-logo/amazon.png',
    rating: '4.3 Rating | 459 Reviews',
    companyDescription:
      'ABC Corp is a leading software development company specializing in web and mobile applications.',
    tags: ['Software', 'Development', 'Web', 'Mobile', 'Technology'],
    fullDetailsLink: '/company/details/asdf',
    viewJobsLink: '/company/details/jobs',
  },
  {
    companyName: 'XYZ Ltd',
    companyLogo: '/assets/images/company-logo/bookmyshow.png',
    rating: '3.3 Rating | 359 Reviews',
    companyDescription:
      'XYZ Ltd is a multinational conglomerate providing a wide range of technology products and services.',
    tags: [
      'Technology',
      'Multinational',
      'Conglomerate',
      'Products',
      'Services',
    ],
    fullDetailsLink: '/company/details/asdf',
    viewJobsLink: '/company/details/jobs',
  },
  {
    companyName: 'PQR Inc',
    companyLogo: '/assets/images/company-logo/google.png',
    rating: '4.8 Rating | 59 Reviews',
    companyDescription:
      'PQR Inc is a technology-driven company offering innovative solutions in the software and energy sectors.',
    tags: ['Technology', 'Software', 'Innovation', 'Energy', 'Technology'],
    fullDetailsLink: '/company/details/pqr',
    viewJobsLink: '/company/details/jobs',
  },
  {
    companyName: 'RST Tech',
    companyLogo: '/assets/images/company-logo/amazon.png',
    rating: '4.5 Rating | 120 Reviews',
    companyDescription:
      'RST Tech is a technology consulting firm specializing in digital transformation and cloud solutions.',
    tags: ['Technology', 'Consulting', 'Digital', 'Transformation', 'Cloud'],
    fullDetailsLink: '/company/details/rst',
    viewJobsLink: '/company/details/rst/jobs',
  },
  {
    companyName: 'MNO Group',
    companyLogo: '/assets/images/company-logo/github.png',
    rating: '4.2 Rating | 80 Reviews',
    companyDescription:
      'MNO Group is a diversified technology conglomerate with interests in software, hardware, and services.',
    tags: [
      'Technology',
      'Diversified',
      'Conglomerate',
      'Software',
      'Hardware',
      'Services',
    ],
    fullDetailsLink: '/company/details/mno',
    viewJobsLink: '/company/details/mno/jobs',
  },
];

const jobCardFields = [
  {
    companyIconLogo: '/assets/images/company-logo/google.png',
    role: 'Frontend Developer',
    companyName: 'Tata Consultancy Service',
    location: 'Bhopal, Madhaya Pradesh',
    jobType: ['Full Time', 'Part Time', 'Internship', 'Startup', 'Indian MNC'],
    companyDesc:
      "UX designers measure and optimize applications to improve ease of use (usability), and create the best user experience by exploring many different approaches to solve end-users' problems",
    isNamedLogo: true,
  },
  {
    companyIconLogo: '/assets/images/company-logo/github.png',
    role: 'Software Engineer',
    companyName: 'Microsoft Corporation',
    location: 'Redmond, Washington',
    jobType: ['Full Time', 'Remote', 'Contract', 'Temporary', 'Freelance'],
    companyDesc:
      'Microsoft is a multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    isNamedLogo: true,
  },
  {
    companyIconLogo: '/assets/images/company-logo/amazon.png',
    role: 'Data Scientist',
    companyName: 'Amazon',
    location: 'Seattle, Washington',
    jobType: ['Full Time', 'Contract', 'Remote', 'Part Time', 'Freelance'],
    companyDesc:
      'Amazon is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    isNamedLogo: true,
  },
  {
    companyIconLogo: '/assets/images/company-logo/bookmyshow.png',
    role: 'Backend Developer',
    companyName: 'Facebook',
    location: 'Menlo Park, California',
    jobType: ['Full Time', 'Internship', 'Part Time', 'Temporary', 'Remote'],
    companyDesc:
      'Facebook is a social networking service and technology company based in Menlo Park, California. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.',
    isNamedLogo: true,
  },
  {
    companyIconLogo: '/assets/images/company-logo/google.png',
    role: 'Frontend Developer',
    companyName: 'Tata Consultancy Service',
    location: 'Bhopal, Madhaya Pradesh',
    jobType: ['Full Time', 'Part Time', 'Internship', 'Startup', 'Indian MNC'],
    companyDesc:
      "UX designers measure and optimize applications to improve ease of use (usability), and create the best user experience by exploring many different approaches to solve end-users' problems",
    isNamedLogo: true,
  },
  {
    companyIconLogo: '/assets/images/company-logo/github.png',
    role: 'Software Engineer',
    companyName: 'Microsoft Corporation',
    location: 'Redmond, Washington',
    jobType: ['Full Time', 'Remote', 'Contract', 'Temporary', 'Freelance'],
    companyDesc:
      'Microsoft is a multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    isNamedLogo: true,
  },
  {
    companyIconLogo: '/assets/images/company-logo/amazon.png',
    role: 'Data Scientist',
    companyName: 'Amazon',
    location: 'Seattle, Washington',
    jobType: ['Full Time', 'Contract', 'Remote', 'Part Time', 'Freelance'],
    companyDesc:
      'Amazon is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    isNamedLogo: true,
  },
  {
    companyIconLogo: '/assets/images/company-logo/bookmyshow.png',
    role: 'Backend Developer',
    companyName: 'Facebook',
    location: 'Menlo Park, California',
    jobType: ['Full Time', 'Internship', 'Part Time', 'Temporary', 'Remote'],
    companyDesc:
      'Facebook is a social networking service and technology company based in Menlo Park, California. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.',
    isNamedLogo: true,
  },
];

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
  // {
  //   fieldName: 'Full-Stack Developer',
  //   opening: 9,
  //   iconName: 'fullstack',
  // },
  // {
  //   fieldName: 'Web Developer',
  //   opening: 1,
  //   iconName: 'web',
  // },
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

const companyBenifits = [
  {
    label: 'Salary',
    src: '/assets/images/company-logo/google.png',
    value:
      'This company has a very compited salary model where you can get a high amount then compiteter this company has a very compited salary model where you can get a high amount then compiteter This company has a very compited',
  },

  {
    label: 'Leader',
    src: '/assets/images/company-logo/linkedin.png',
    value:
      'Pichai Sundararajan (born June 10, 1972), better known as Sundar Pichai (/ˈsʊndɑːr pɪˈtʃaɪ/), is an Indian-American business executive. He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google.',
  },

  {
    label: 'Leader',
    src: '/assets/images/company-logo/linkedin.png',
    value:
      'Pichai Sundararajan (born June 10, 1972), better known as Sundar Pichai (/ˈsʊndɑːr pɪˈtʃaɪ/), is an Indian-American business executive. He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google.',
  },
  {
    label: 'Salary',
    src: '/assets/images/company-logo/google.png',
    value:
      'This company has a very compited salary model where you can get a high amount then compiteter this company has a very compited salary model where you can get a high amount then compiteter This company has a very compited',
  },

  {
    label: 'Leader',
    src: '/assets/images/company-logo/linkedin.png',
    value:
      'Pichai Sundararajan (born June 10, 1972), better known as Sundar Pichai (/ˈsʊndɑːr pɪˈtʃaɪ/), is an Indian-American business executive. He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google.',
  },

  {
    label: 'Leader',
    src: '/assets/images/company-logo/linkedin.png',
    value:
      'Pichai Sundararajan (born June 10, 1972), better known as Sundar Pichai (/ˈsʊndɑːr pɪˈtʃaɪ/), is an Indian-American business executive. He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google.',
  },
];

const employeeBenifits = [
  {
    iconName: 'home',
    value: 'Work from home',
  },
  {
    iconName: 'health',
    value: 'Health Insurance',
  },
  {
    iconName: 'cafeteria',
    value: 'cafeteria',
  },
  {
    iconName: 'beach',
    value: 'Team Outings',
  },
  {
    iconName: 'home',
    value: 'Work from home',
  },
  {
    iconName: 'home',
    value: 'Work from home',
  },
  {
    iconName: 'home',
    value: 'Work from home',
  },
  {
    iconName: 'home',
    value: 'Work from home',
  },
  {
    iconName: 'home',
    value: 'Work from home',
  },
  {
    iconName: 'home',
    value: 'Work from home',
  },
];

const companyDescTable = [
  {
    name: 'Founded in',
    value: '1967 (56 yrs old)',
  },
  {
    name: 'Headquaters',
    value: 'Paris, France',
  },
  {
    name: 'Office location',
    value: 'Hyderabad/Secunderabad | Chennai | Navi Mumbai',
  },
  {
    name: 'Official website',
    value: 'https://www.capgemini.com/in-en/',
  },
  {
    name: 'Company gmail',
    value: 'camgimini@gmail.com',
  },
  {
    name: 'CEO',
    value: 'Ashwin Yardi',
  },
  {
    name: 'Nature of Business',
    value: 'Service | B2B',
  },
  {
    name: 'Contact No.',
    value: '9431887356',
  },
  {
    name: 'Ownership',
    value: 'Public',
  },
  {
    name: 'Type of company',
    value: 'Foreign MNC',
  },
  {
    name: 'Founder',
    value: 'Serge Kampf',
  },
];

const companySubsidiaries = [
  {
    image: '/assets/images/company-logo/capgemini.png',
    name: 'Capgemini Engineering',
  },
  {
    image: '/assets/images/company-logo/capgiminilogo.png',
    name: 'LiquidHub',
  },
  {
    image: '/assets/images/company-logo/capgemini.png',
    name: 'Saintlife Pharmaceuticals ',
  },
  {
    image: '/assets/images/company-logo/capgiminilogo.png',
    name: 'IGATE',
  },
  {
    image: '/assets/images/company-logo/capgemini.png',
    name: 'Thesys Technologies',
  },
];

const companyLeaders = [
  {
    image: '/assets/images/p12.jpg',
    name: 'Aiman Ezzat',
    organisation: 'Chief Executive Officer and Director',
  },
  {
    image: '/assets/images/p12.jpg',
    name: 'Michael Schulte',
    organisation: 'CEO, Northen Europe Strategic Business Unit',
  },
  {
    image: '/assets/images/p12.jpg',
    name: 'Cyril Garica',
    organisation: 'Head of global sustainability services',
  },
  {
    image: '/assets/images/p12.jpg',
    name: 'Cyril Garica',
    organisation: 'Head of global sustainability services',
  },
  {
    image: '/assets/images/p12.jpg',
    name: 'Cyril Garica',
    organisation: 'Head of global sustainability services',
  },
  {
    image: '/assets/images/p12.jpg',
    name: 'Cyril Garica',
    organisation: 'Head of global sustainability services',
  },
];

export {
  faqFieldsObject,
  popularCategoryObject,
  jobsFilter,
  companyFilter,
  companyBenifits,
  employeeBenifits,
  jobCardFields,
  companyDescTable,
  companySubsidiaries,
  companyLeaders,
  companyCardFields,
};
