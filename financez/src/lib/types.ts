import { ObjectId } from 'mongodb';

export interface User {
    _id?: string;
    name: string;
    email: string;
    password: string;
    country: {
        name: string;
        code: string;
    }
    createdAt: Date;
}

export interface Transaction {
    _id?: string;
    userId: string;
    title: string;
    description?: string;
    amount: number;
    type: 'income' | 'recurring-income' | 'expense' | 'recurring-expense';
    category: string;
    date: Date;
    createdAt: Date;
    lastEdited: Date;
}