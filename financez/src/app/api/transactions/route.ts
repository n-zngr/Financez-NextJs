import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Transaction } from '@/lib/types';
import { ObjectId } from 'mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('financez');
        const transactions = await db.collection<Transaction>('transactions').find({}).toArray();
        return NextResponse.json(transactions);
    } catch(e) {
        console.log(e);
        return NextResponse.json({ error: 'Failed to fetch transactions'}, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db('financez');
        const result = await db.collection<Transaction>('transactions').insertOne({
            ...body,
            userId: new ObjectId(body.userId),
            date: new Date(body.date)
        });
        return NextResponse.json(result);
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: 'Failed to create transaction'}, { status: 500 });
    }
}