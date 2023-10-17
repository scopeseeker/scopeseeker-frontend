import mongoose, { Document, Model, Schema } from 'mongoose';

interface IJob extends Document {
  title: string;
  description: {
    responsibilities: string;
    requirements: string;
    qualifications: string;
    benefits?: string;
  };
  company: mongoose.Schema.Types.ObjectId;
  jobType: string;
  location: string;
  industry: string;
  skillsRequired: string[];
  experienceRequired: string;
  salary: number;
  status: string;
}

const jobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    description: {
      responsibilites: { type: String, required: true },
      requirements: { type: String, required: true },
      qualifications: { type: String, required: true },
      benefits: String,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    jobType: { type: String, required: true }, //in office, Hybrid, and Remote
    location: { type: String, required: true },
    industry: { type: String, required: true }, //hashtags
    skillsRequired: [{ type: String, required: true }],
    experienceRequired: { type: String, required: true },
    salary: { type: Number, required: true },
    status: { type: String, default: 'Open' },
  },
  { timestamps: true },
);

const Job: Model<IJob> =
  mongoose.models.Job || mongoose.model<IJob>('Job', jobSchema);

export default Job;
