import { ObjectId } from 'mongodb';

export interface User {
    _id?: string;
    username: string;
    email: string;
    password: string;
    country: string;
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