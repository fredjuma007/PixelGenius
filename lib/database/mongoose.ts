import mongoose, {Mongoose} from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface  MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn      // if a connection is already cached, return it

    if(!MONGODB_URL)
        throw new Error('MONGODB_URL is missing');   // if MONGODB_URL is not set, throw an error

    cached.promise = 
        cached.promise ||
        mongoose.connect(MONGODB_URL, {
            dbName: 'pixelgenius', bufferCommands: false
        })

    cached.conn = await cached.promise;

    return cached.conn;

}
// this is a serverless function