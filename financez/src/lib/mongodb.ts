import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri: string = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

async function connectDb() {
    try {
        client = new MongoClient(uri, options);
        clientPromise = client.connect();
        
        const connection = await clientPromise;
        
        if (connection) {
            console.log('Successfully connected to MongoDB');
        }
        return clientPromise;
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw new Error('MongoDB connection failed');
    }
}

export default connectDb;