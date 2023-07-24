import mongoose, { models } from 'mongoose';

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  industry: { type: String, required: true },
  founded: { type: Date, required: true },
  ownership: { type: String },
  headquarters: { type: String },
  officeLocations: [{ type: String }],
  ceo: { type: String },
  founders: [{ type: String }],
  typeOfCompany: { type: String },
  socialMedia: {
    linkedin: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    youtube: { type: String },
    instagram: { type: String },
  },
  website: { type: String },
  subsidiaries: [{ type: String }],
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  employeeBenefits: [{ type: String }],
  leadersOfCompany: [
    {
      name: { type: String },
      title: { type: String },
      linkedinProfile: { type: String },
    },
  ],
  rating: { type: Number, min: 0, max: 5 },
  companySize: { type: String },
  companyLogo: { type: String },
  companyVideo: { type: String },
  companyTags: [{ type: String }],
  interviewExperience: [
    {
      articleTitle: { type: String, required: true },
      articleLink: { type: String, required: true },
    },
  ],
  employees: [
    {
      name: { type: String, required: true },
      title: { type: String },
      linkedinProfile: { type: String },
    },
  ],
});

const Company = models.Company || mongoose.model('Company', companySchema);

export default Company;
