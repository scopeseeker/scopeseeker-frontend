import mongoose, { Schema, Document, Model } from 'mongoose';

// Define an interface for the Job document
interface IJob extends Document {
  title: string; // Job title
  description: string; // Job description
  company: mongoose.Schema.Types.ObjectId; // Reference to the company offering the job
  location: string; // Job location
  employmentType: string; // Employment type (e.g., Full-time, Part-time, Contract)
  industry: string; // Industry of the job
  skillsRequired: string[]; // List of required skills
  experienceRequired: string; // Required experience level
  educationRequired: string; // Required education level
  salary: number; // Salary or salary range
  applicationDeadline: Date; // Application deadline
  postedAt: Date; // Date when the job was posted
  status: string; // Job status (e.g., Open, Closed)
  applicants: mongoose.Schema.Types.ObjectId[]; // List of job applicants
  // Add more fields as needed
}

// Create a Mongoose schema for the Job model
const jobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  location: { type: String, required: true },
  employmentType: { type: String, required: true },
  industry: { type: String, required: true },
  skillsRequired: [{ type: String, required: true }],
  experienceRequired: { type: String, required: true },
  educationRequired: { type: String, required: true },
  salary: { type: Number, required: true },
  applicationDeadline: { type: Date, required: true },
  postedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'Open' },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Applicant' }],
  // Add more fields as needed
});

// Create the Job model
const Job: Model<IJob> = mongoose.model<IJob>('Job', jobSchema);

export default Job;
