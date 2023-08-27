import connectMongoDB from '@/lib/db';
import User from '@/models/userSchema';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();
    const { email, fullName, image, phoneNumber, password } =
      await request.json();

    // Basic request validation
    if (!email || !fullName) {
      return NextResponse.json({
        status: 400, // Bad Request Status Code
        message: 'Please provide both email and fullName in the request body',
      });
    }

    // Check Existing User
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({
        status: 409, // Conflict Status Code
        message: 'User already exists',
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 12);

    // Create New User
    const newUser = await User.create({
      email,
      fullName,
      image,
      phoneNumber,
      password: hashedPassword,
    });

    if (!newUser) {
      return NextResponse.json({
        status: 500, // Internal Server Error Status Code
        message: 'Failed to create user',
      });
    }

    // Return user data in the response
    return NextResponse.json({
      status: 201, // Created Status Code
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500, // Internal Server Error Status Code
      message: error?.message || 'Something went wrong',
    });
  }
}
