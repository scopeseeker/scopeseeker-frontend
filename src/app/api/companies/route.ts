import connectMongoDB from '@/lib/db';
import Company from '@/models/companySchema';
import { NextResponse } from 'next/server';

// Create a company profile.
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

// Get a list of all companies.
export async function GET() {
  try {
    await connectMongoDB();
    const companies = await Company.find();

    if (companies.length === 0) {
      return NextResponse.json({
        status: 404,
        message: 'No companies found',
      });
    }

    return NextResponse.json({
      status: 200,
      message: 'Companies fetched successfully',
      companies,
    });

  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: error?.message || 'Something went wrong',
      details: error,
    });
  }
}


/* It can be good by

import connectMongoDB from '@/lib/db';
import Company from '@/models/companySchema';
import { NextResponse } from 'next/server';

// Middleware for database connection
const withDBConnection = async (handler: Function) => {
  await connectMongoDB();
  return async (request: Request) => {
    try {
      return await handler(request);
    } catch (error: any) {
      console.error(error);
      return NextResponse.json({
        status: 500,
        message: error?.message || 'Something went wrong',
        details: error,
      });
    }
  };
};

export const createCompany = async (body: any) => {
  const existingCompany = await Company.findOne({ name: body.name });

  if (existingCompany) {
    return {
      status: 409,
      message: 'Company already exists',
    };
  }

  const newCompany = await Company.create(body);
  const savedCompany = await newCompany.save();

  return {
    status: 201,
    message: 'Company created successfully',
    company: savedCompany,
  };
};

// Route handler
export const POST = withDBConnection(async (request: Request) => {
  const body = await request.json();
  const result = await createCompany(body);

  return NextResponse.json(result);
});

*/
