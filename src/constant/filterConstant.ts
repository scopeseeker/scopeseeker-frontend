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
      { label: 'IT', value: 'IT' },
      { label: 'Foreign MNCs', value: 'ForeignMNCs' },
      { label: 'StartUp', value: 'StartUp' },
      { label: 'Corporate', value: 'Corporate' },
      { label: 'FinTech', value: 'FinTech' },
      { label: 'Indian MNC', value: 'IndianMNC' },
      { label: 'Unicorn', value: 'Unicorn' },
      { label: 'Product Based', value: 'ProdBased' },
      { label: 'Service Based', value: 'Service Based' },
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
      { label: 'Software Engineer', value: 'Software Engineer' },
      { label: 'Full Stack Developer', value: 'Full Stack Developer' },
      { label: 'Frontend Developer', value: 'Frontend Developer' },
      { label: 'Backend Developer', value: 'Backend Developer' },
      { label: 'Mobile App Developer', value: 'Mobile App Developer' },
      { label: 'Web Developer', value: 'Web Developer' },
      { label: 'Database Administrator', value: 'Database Administrator' },
      { label: 'Network Engineer', value: 'Network Engineer' },
      { label: 'System Administrator', value: 'System Administrator' },
      {
        label: 'Cloud Solutions Architect',
        value: 'Cloud Solutions Architect',
      },
      { label: 'UI/UX Designer', value: 'UI/UX Designer' },
      { label: 'DevOps Engineer', value: 'DevOps Engineer' },
      { label: 'Security Analyst', value: 'Security Analyst' },
      { label: 'Data Scientist', value: 'Data Scientist' },
      { label: 'AI/Machine Learning Engineer', value: 'AI/ML Engineer' },
      { label: 'Quality Assurance (QA) Engineer', value: 'QA Engineer' },
      { label: 'Python Developer', value: 'Python Developer' },
      { label: 'Java Developer', value: 'Java Developer' },
      { label: 'C++ Developer', value: 'C++ Developer' },
      { label: 'Ruby on Rails Developer', value: 'Ruby on Rails Developer' },
      { label: 'JavaScript Developer', value: 'JavaScript Developer' },
      { label: 'PHP Developer', value: 'PHP Developer' },
      { label: '.NET Developer', value: '.NET Developer' },
      { label: 'React Developer', value: 'React Developer' },
      { label: 'Angular Developer', value: 'Angular Developer' },
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
];

const companyFilter = [
  {
    category: 'Company Type',
    options: [
      { label: 'IT', value: 'IT' },
      { label: 'Foreign MNCs', value: 'ForeignMNCs' },
      { label: 'StartUp', value: 'StartUp' },
      { label: 'Corporate', value: 'Corporate' },
      { label: 'FinTech', value: 'FinTech' },
      { label: 'Indian MNC', value: 'IndianMNC' },
      { label: 'Unicorn', value: 'Unicorn' },
      { label: 'Product Based', value: 'Product Based' },
      { label: 'Service Based', value: 'Service Based' },
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
      { label: 'Hyderabad', value: 'Hyderabad' },
      { label: 'Mumbai', value: 'Mumbai' },
      { label: 'Chennai', value: 'Chennai' },
      { label: 'Gurgaon', value: 'Gurgaon' },
      { label: 'Delhi', value: 'Delhi' },
      { label: 'Jaipur', value: 'Jaipur' },
      { label: 'Lucknow', value: 'Lucknow' },
      { label: 'Chandigarh', value: 'Chandigarh' },
      { label: 'Kochi', value: 'Kochi' },
      { label: 'Indore', value: 'Indore' },
      { label: 'Bhopal', value: 'Bhopal' },
      { label: 'Agra', value: 'Agra' },
      { label: 'Surat', value: 'Surat' },
      { label: 'Vadodara', value: 'Vadodara' },
      { label: 'Gurugram', value: 'Gurugram' },
      { label: 'Chandigarh', value: 'Chandigarh' },
      { label: 'Hyderabad', value: 'Hyderabad' },
      { label: 'Mysore', value: 'Mysore' },
      { label: 'Coimbatore', value: 'Coimbatore' },
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
];

export { companyFilter, jobsFilter };
