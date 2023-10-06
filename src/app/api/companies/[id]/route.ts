import connectMongoDB from '@/lib/db';
import Company from '@/models/companySchema';
import { NextResponse } from 'next/server';

// Get detailed information about a specific company by id
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const companyId = params.id;
    await connectMongoDB();

    if (companyId) {
      const findCompany = await Company.findById(companyId);
      if (findCompany) {
        return NextResponse.json({
          status: 200,
          message: 'Company fetched successfully',
          company: findCompany,
        });
      }
    }
    return NextResponse.json({
      status: 404,
      message: 'Company not found',
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      message: error.name || 'Something went wrong',
      details: error,
    });
  }
}

// Delete a specific company by id
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const companyId = params.id;

    await connectMongoDB();

    const deletedCompany = await Company.findByIdAndDelete(companyId);

    if (deletedCompany) {
      return NextResponse.json({
        status: 200,
        message: 'Company deleted successfully',
        company: deletedCompany,
      });
    }
    return NextResponse.json({
      status: 404,
      message: 'Company not found',
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({
      status: 500,
      message: error.name || 'Something went wrong',
      details: error,
    });
  }
}
