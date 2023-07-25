import mongoose, { models } from 'mongoose';

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  industry: { type: String, required: true },
  founded: { type: Date, required: true },
  ownership: { type: String, required: true },
  headquarters: { type: String, required: true },
  officeLocations: [{ type: String, required: true }],
  ceo: { type: String, required: true },
  founders: [{ type: String, required: true }],
  typeOfCompany: { type: String, required: true },
  socialMedia: {
    linkedin: { type: String, required: true },
    twitter: { type: String, required: true },
    facebook: { type: String, required: true },
    youtube: { type: String, required: true },
    instagram: { type: String, required: true },
  },
  website: { type: String, required: true },
  subsidiaries: [{ type: String, required: true }],
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true }],
  employeeBenefits: [{ type: String, required: true }],
  leadersOfCompany: [
    {
      name: { type: String, required: true },
      title: { type: String, required: true },
      linkedinProfile: { type: String, required: true },
    },
  ],
  rating: { type: Number, min: 0, max: 5, required: true },
  companySize: { type: String, required: true },
  companyLogo: { type: String, required: true },
  companyVideo: { type: String, required: true },
  companyTags: [{ type: String, required: true }],
  interviewExperience: [
    {
      articleTitle: { type: String, required: true },
      articleLink: { type: String, required: true },
    },
  ],
  employees: [
    {
      name: { type: String, required: true },
      designation: { type: String, required: true },
      linkedinProfile: { type: String, required: true },
    },
  ],
});

const Company = models.Company || mongoose.model('Company', companySchema);

export default Company;
