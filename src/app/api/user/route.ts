import User from '@/models/userSchema';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
  const { email, abc } = await req.json();
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    return NextResponse.json({
      status: 404,
      body: {
        message: 'User not found',
      },
    });
  }

  const update = await User.findOneAndUpdate({email}, {abc});
  return NextResponse.json({
    status: 200,
    body: {
      message: 'User updated',
      data: update,
    },
  });
}
