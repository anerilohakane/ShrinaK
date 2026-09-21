import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: 'Successfully connected to MongoDB!' }, { status: 200 });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to connect to the database' }, { status: 500 });
  }
}
