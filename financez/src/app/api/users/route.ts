import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { User } from '@/lib/types';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('financez');
        const users = await db.collection<User>('users').find({}).toArray();
        return NextResponse.json(users);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db('financez');
        const result = await db.collection<User>('users').insertOne({
            ...body,
            createdAt: new Date()
        });
        return NextResponse.json(result);
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}