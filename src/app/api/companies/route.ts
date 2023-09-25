import connectMongoDB from '@/lib/db';
import Company from '@/models/companySchema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectMongoDB();
    const body = await request.json();

    const existingCompany = await Company.findOne({ name: body.name });

    if (existingCompany) {
      return NextResponse.json({
        status: 409,
        message: 'Company already exists',
      });
    }

    const newCompany = await Company.create(body);
    const savedCompany = await newCompany.save();

    return NextResponse.json({
      status: 201,
      message: 'Company created successfully',
      company: savedCompany,
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      status: 500, // Internal Server Error Status Code
      message: error?.message || 'Something went wrong',
      details: error,
    });
  }
}
