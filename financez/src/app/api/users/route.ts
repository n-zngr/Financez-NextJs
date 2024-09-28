import { NextResponse } from 'next/server';
import connectDb from '@/lib/mongodb';
import { User } from '@/lib/types';

export async function GET() {
    try {
        const client = await connectDb();
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
        const client = await connectDb();
        const db = client.db('financez');
        
        const { name, email, password } = body;
        // const country = { name: body.country.name, code: body.country.code };
        const country = { name: 'unimplemented', code: 'test' };

        if (!name) {
            return NextResponse.json({ error: 'Full name is required'}, { status: 400 })
        }

        const result = await db.collection<User>('users').insertOne({
            name,
            email,
            password,
            country,
            createdAt: new Date()
        });
        
        return NextResponse.json({ id: result.insertedId });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}