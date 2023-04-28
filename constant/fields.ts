interface IPopularCategory {
  fieldName: string;
  opening: number;
  iconName: string;
}
const popularCategoryObject: IPopularCategory[] = [
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

export { popularCategoryObject };
