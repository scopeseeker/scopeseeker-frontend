import User from '@/models/userSchema';
import { connectMongoDB } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, fullName } = await request.json();

    // Basic request validation
    if (!email || !fullName) {
      return NextResponse.json({
        status: 'error',
        message: 'Please provide both email and fullName in the request body',
      });
    }

    await connectMongoDB();

    // Check Existing User
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({
        status: 'error',
        message: 'User already exists',
      });
    }

    // Create New User
    const newUser = await User.create({ email, fullName });

    if (!newUser) {
      return NextResponse.json({
        status: 'error',
        message: 'Failed to create user',
      });
    }

    // Return user data in the response
    return NextResponse.json({
      status: 'success',
      message: 'User created successfully',
      user: newUser, // Include user data in the response
    });
  } catch (error) {
    // Handle any errors that occur during user creation
    return NextResponse.json({
      status: 'error',
      message: 'An error occurred while processing the request',
    });
  }
}
