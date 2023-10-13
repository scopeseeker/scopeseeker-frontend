import mongoose, { Document, Model, Schema } from 'mongoose';

// Define an interface for the Job document
interface IJob extends Document {
  title: string; // Job title
  description: string; // Job description
  company: mongoose.Schema.Types.ObjectId; // Reference to the company offering the job
  jobType: string; // Type of job (e.g., Full-time, Part-time, Internship)
  location: string; // Job location
  industry: string; // Industry of the job (e.g., Software, Finance, etc.)
  skillsRequired: string[]; // List of required skills for the job
  experienceRequired: string; // Required experience level
  educationRequired: string; // Required education level
  salary: number; // Salary or salary range
  status: string; // Job status (e.g., Open, Closed)
  // Add more fields as needed
}

// Create a Mongoose schema for the Job model
const jobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    jobType: { type: String, required: true },
    location: { type: String, required: true },
    industry: { type: String, required: true },
    skillsRequired: [{ type: String, required: true }],
    experienceRequired: { type: String, required: true },
    educationRequired: { type: String, required: true },
    salary: { type: Number, required: true },
    status: { type: String, default: 'Open' },
  },
  { timestamps: true },
);

// Create the Job model
const Job: Model<IJob> = mongoose.model<IJob>('Job', jobSchema);

export default Job;
