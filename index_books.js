import { connectDB } from "./connect.js";

async function createIndexes() {
  const db = await connectDB();
  const books = db.collection("books");

  await books.createIndex({ title: 1 }, { unique: true });
  await books.createIndex({ author: 1 });
  console.log("Indexes created");
}

createIndexes();
