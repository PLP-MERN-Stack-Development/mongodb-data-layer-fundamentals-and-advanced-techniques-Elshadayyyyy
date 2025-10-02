import { connectDB } from "./connect.js";

async function aggregateBooks() {
  const db = await connectDB();
  const books = db.collection("books");

  // Average number of pages
  const result = await books.aggregate([
    { $group: { _id: null, avgPages: { $avg: "$pages" } } },
  ]).toArray();

  console.log("Average pages:", result[0].avgPages);
}

aggregateBooks();
