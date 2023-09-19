import mongoose, { Document, Model, Schema } from 'mongoose';

// Define an interface for the Company document
interface ICompany extends Document {
  name: string; // Name of the company
  description: string; // Brief description of the company
  industry: string; // Industry the company operates in
  founded: Date; // Date when the company was founded
  ownership: string; // Ownership type (e.g., Public, Private)
  headquarters: string; // Location of the company's headquarters
  officeLocations: string[]; // List of office locations
  ceo: string; // CEO of the company
  founders: string[]; // List of founders' names
  typeOfCompany: string; // Type of company (e.g., Corporation, Startup)
  socialMedia: {
    linkedin: string; // LinkedIn profile URL
    twitter: string; // Twitter profile URL
    facebook: string; // Facebook profile URL
    youtube: string; // YouTube channel URL
    instagram: string; // Instagram profile URL
  };
  website: string; // Company's website URL
  subsidiaries: string[]; // List of subsidiary companies
  jobs: mongoose.Schema.Types.ObjectId[]; // References to associated job documents
  employeeBenefits: string[]; // List of employee benefits offered
  leadersOfCompany: {
    name: string; // Name of a company leader
    title: string; // Leader's title or position
    linkedinProfile: string; // LinkedIn profile URL of the leader
  }[];
  rating: number; // Company rating (0 to 5)
  companySize: string; // Size of the company (e.g., Small, Medium, Large)
  companyLogo: string; // URL of the company's logo image
  companyVideo: string; // URL of a video about the company
  companyTags: string[]; // Tags or categories associated with the company
  interviewExperience: {
    articleTitle: string; // Title of an interview experience article
    articleLink: string; // URL of the interview experience article
  }[];
  employees: {
    name: string; // Employee's name
    designation: string; // Employee's job title or designation
    linkedinProfile: string; // LinkedIn profile URL of the employee
  }[];
}

// Create a Mongoose schema for the Company model
const companySchema = new Schema<ICompany>(
  {
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
    jobs: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    ],
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
  },
  { timestamps: true },
);

// Create the Company model
const Company: Model<ICompany> =
  mongoose.models.Company || mongoose.model<ICompany>('Company', companySchema);

export default Company;
