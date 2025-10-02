import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017"; //my local MongoDB
const dbName = "bookstore";

export const client = new MongoClient(url);

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error("Connection error:", err);
  }
}
