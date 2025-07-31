import { MongoClient } from "mongodb";
import { db_, defaultDb } from "../service/envs";

const uri = `mongodb://${db_.user}:${db_.pass}@${db_.host}:${db_.port}/?authSource=${db_.auth}`;
const client = new MongoClient(uri);

export async function connectToDatabase(database: string | null = null) {
    const db: string = database ?? defaultDb;
    try {
        await client.connect();
        console.log("✅ MongoDB connected");
        return client.db(db);
    } catch (err) {
        console.error("❌ Connection error:", err);
        throw err;
    }
}
