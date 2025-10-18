import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/config/db';
import mongoose from 'mongoose';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    console.log('email', email);

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB using connectDB function
    const db = await connectDB();
    const collection = db?.collection('subscribers');

    if (!collection) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await collection.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Insert new subscriber
    const result = await collection.insertOne({
      email,
      subscribedAt: new Date(),
      source: 'landing-page'
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed!',
        id: result.insertedId 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
