import connectMongoDB from '@/lib/db';
import Job from '@/models/jobSchema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectMongoDB();
    const jobData = await request.json();

    const job = await new Job(jobData);
    await job.save();

    return NextResponse.json({
      status: 200,
      message: job,
    });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const jobs = await Job.find();

    return NextResponse.json({
      status: 200,
      message: jobs,
    });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
