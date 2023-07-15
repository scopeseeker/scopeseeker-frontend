interface IMetaData {
  [key: string]: {
    title: string;
    description: string;
  };
}

const metaData: IMetaData = {
  home: {
    title: 'Scope Seeker - Seek the scope of your potential',
    description:
      'Find the best tech job opportunities in your field at Scope Seeker. Browse through our extensive listings and take your career to the next level.',
  },
  jobs: {
    title: 'Explore Tech Job Openings',
    description:
      'Discover exciting tech job openings on Scope Seeker. We connect talented professionals with top companies in the industry. Start your search today!',
  },
  jobDetails: {
    title: 'Job Details',
    description:
      'Get detailed information about a specific tech job opportunity on Scope Seeker. Learn about the requirements, responsibilities, and benefits of the position.',
  },
  company: {
    title: 'Explore Companies',
    description:
      'Discover leading tech companies on Scope Seeker. Learn about their culture, mission, and available job opportunities. Find the perfect match for your skills and aspirations.',
  },
  companyDetails: {
    title: 'Company Details',
    description:
      'Learn more about a specific tech company on Scope Seeker. Explore their background, products, services, and career opportunities. Make an informed decision for your career.',
  },
  blogs: {
    title: 'Blogs',
    description:
      'Stay updated with the latest insights and trends in the tech industry through the Scope Seeker Blog. Read articles, tips, and advice to enhance your career prospects.',
  },
  contactUs: {
    title: 'Contact Us',
    description:
      "Contact the Scope Seeker team for any inquiries, feedback, or support. We're here to assist you on your tech job search journey. Reach out to us today!",
  },
  aboutUs: {
    title: 'About Us',
    description:
      'Learn more about Scope Seeker, the leading tech job search platform. Discover our mission, values, and commitment to helping job seekers find their dream roles.',
  },
  login: {
    title: 'Login',
    description:
      'Log in to your Scope Seeker account and access personalized features. Manage your job applications, save favorite listings, and stay connected with the tech community.',
  },
  signup: {
    title: 'Create an Account',
    description:
      'Sign up for a Scope Seeker account and unlock a world of tech job opportunities. Join our platform and connect with leading companies in the industry.',
  },
  myProfile: {
    title: 'Manage Your Profile',
    description:
      "Take control of your tech job search with Scope Seeker's profile management tools. Update your information, showcase your skills, and attract potential employers.",
  },
  dashboard: {
    title: 'Dashboard',
    description:
      'Access your personalized dashboard on Scope Seeker. Track your job applications, receive recommendations, and stay organized throughout your tech job search.',
  },
  resources: {
    title: 'Resources',
    description:
      'Explore a collection of valuable resources for tech job seekers on Scope Seeker. Find guides, tutorials, and industry insights to boost your career prospects.',
  },
  termsOfUse: {
    title: 'Terms of Use',
    description:
      'Read and understand the terms of use for Scope Seeker. Learn about the guidelines, policies, and rules that govern the usage of our platform.',
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    description:
      'Review the privacy policy of Scope Seeker to understand how we collect, use, and protect your personal information. Your privacy and data security are important to us.',
  },
  requestCompany: {
    title: 'Request Company',
    description: 'Here you can send a request for company',
  },
  editProfile: {
    title: 'Edit Profile',
    description: 'Edit your profile to make it the best it can be.',
  },
  settings: {
    title: 'Settings',
    description: 'setting your profile to make it the best it can be.',
  },
};

export default metaData;
